/*
  HTTP status codes used throughout the application.
  Keeping status codes centralized prevents magic numbers
  from being scattered across controllers and services.
 */
export const HTTP_STATUS = {
  // 2xx - Successful requests
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // 4xx - Client errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // 5xx - Server errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

/*
  Common HTTP response messages.
  These provide consistent default messages across
  controllers and middleware.
 */
export const HTTP_MESSAGE = {
  SUCCESS: "Request successful",
  CREATED: "Resource created successfully",
  NO_CONTENT: "No content",

  BAD_REQUEST: "Bad request",
  UNAUTHORIZED: "Authentication required",
  FORBIDDEN: "Access denied",
  NOT_FOUND: "Resource not found",
  CONFLICT: "Resource already exists",
  UNPROCESSABLE_ENTITY: "Validation failed",
  TOO_MANY_REQUESTS: "Too many requests",

  INTERNAL_SERVER_ERROR: "Internal server error",
  SERVICE_UNAVAILABLE: "Service unavailable",
} as const;

/*
  HTTP methods supported by the application.
 */
export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
  HEAD: "HEAD",
} as const;

/*
  Content types used by the API.
 */
export const CONTENT_TYPE = {
  JSON: "application/json",
  TEXT: "text/plain",
  FORM_DATA: "multipart/form-data",
  URL_ENCODED: "application/x-www-form-urlencoded",
} as const;

/*
  Common API headers.
 */
export const HTTP_HEADER = {
  AUTHORIZATION: "Authorization",
  CONTENT_TYPE: "Content-Type",
  ACCEPT: "Accept",
  USER_AGENT: "User-Agent",
  ORIGIN: "Origin",
  X_REQUEST_ID: "X-Request-ID",
} as const;

/*
  Authorization schemes.
 */
export const AUTH_SCHEME = {
  BEARER: "Bearer",
} as const;
