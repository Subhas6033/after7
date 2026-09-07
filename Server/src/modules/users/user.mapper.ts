import type { UserDocument } from "./user.models.ts";
import type { IUserResponse } from "./user.types.ts";

/*
  Converts a Mongoose User document into the
  safe object returned to the client.
  Sensitive database fields such as passwordHash
  are intentionally excluded.
 */
export const toUserResponse = (user: UserDocument): IUserResponse => {
  return {
    id: user._id.toString(),

    email: user.email,
    name: user.name,
    gender: user.gender,

    role: user.role,
    status: user.status,

    emailVerified: user.emailVerified,
    emailVerifiedAt: user.emailVerifiedAt,

    lastLoginAt: user.lastLoginAt,

    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
