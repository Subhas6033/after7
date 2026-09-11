import { API_BASE_URL } from "./api-config";
import { ApiError } from "./api-error";

type ApiClientOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

function buildUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const baseUrl = API_BASE_URL.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

function isJsonBody(body: unknown): boolean {
  return (
    body !== undefined &&
    body !== null &&
    !(body instanceof FormData) &&
    !(body instanceof Blob) &&
    !(body instanceof ArrayBuffer)
  );
}

async function parseResponseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";

  if (response.status === 204) {
    return null;
  }

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();

  return text || null;
}

export async function apiClient<TResponse>(
  path: string,
  options: ApiClientOptions = {},
): Promise<TResponse> {
  const { body, headers: customHeaders, signal, ...requestInit } = options;

  const headers = new Headers(customHeaders);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (isJsonBody(body)) {
    headers.set("Content-Type", "application/json");
  }

  const requestBody =
    body === undefined
      ? undefined
      : isJsonBody(body)
        ? JSON.stringify(body)
        : (body as BodyInit);

  let response: Response;

  try {
    response = await fetch(buildUrl(path), {
      ...requestInit,
      headers,
      body: requestBody,
      credentials: "include",
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    throw new ApiError("Unable to connect to the server.", 0, undefined, error);
  }

  const responseBody = await parseResponseBody(response);

  if (!response.ok) {
    const errorMessage =
      typeof responseBody === "object" &&
      responseBody !== null &&
      "message" in responseBody &&
      typeof responseBody.message === "string"
        ? responseBody.message
        : `Request failed with status ${response.status}.`;

    throw new ApiError(errorMessage, response.status, responseBody);
  }

  return responseBody as TResponse;
}
