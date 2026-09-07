/*
  Centralized HTTP status codes.
  Keep all HTTP status codes in one place to avoid magic numbers
  such as `200`, `404`, or `500` throughout the application.
 */
export const HTTP_STATUS = {
  // 2xx — Successful requests
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // 4xx — Client errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // 5xx — Server errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Union type containing all supported HTTP status code values.
export type HttpStatusCode = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
