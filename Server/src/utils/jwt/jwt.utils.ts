import jwt from "jsonwebtoken";
import type {
  AccessTokenPayload,
  RefreshTokenPayload,
} from "../../modules/auth/auth.types.ts";
import type { UserRole } from "../../modules/users/user.types.ts";

const ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error("JWT_ACCESS_SECRET is not configured");
}

if (!REFRESH_TOKEN_SECRET) {
  throw new Error("JWT_REFRESH_SECRET is not configured");
}

/*
  Generates a short-lived access token.
 */
export const generateAccessToken = (userId: string, role: UserRole): string => {
  const payload: AccessTokenPayload = {
    sub: userId,
    role,
    type: "access",
  };

  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

/*
  Generates a refresh token.
 */
export const generateRefreshToken = (
  userId: string,
  sessionId: string,
): string => {
  const payload: RefreshTokenPayload = {
    sub: userId,
    sessionId,
    type: "refresh",
  };

  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

/*
  Verifies an access token.
 */
export const verifyAccessToken = (token: string): AccessTokenPayload => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as AccessTokenPayload;
};

/*
  Verifies a refresh token.
 */
export const verifyRefreshToken = (token: string): RefreshTokenPayload => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET) as RefreshTokenPayload;
};
