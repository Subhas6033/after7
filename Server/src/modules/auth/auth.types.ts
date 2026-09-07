import type { UserRole } from "../users/user.types.ts";

/*
  Payload contained in an access token.
 */
export interface AccessTokenPayload {
  sub: string;
  role: UserRole;
  type: "access";
}

/*
  Payload contained in a refresh token.
 */
export interface RefreshTokenPayload {
  sub: string;
  sessionId: string;
  type: "refresh";
}

/*
  Tokens returned after successful authentication.
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
