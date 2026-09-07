import { User } from "./user.models.ts";
import type { UserDocument } from "./user.models.ts";
import type { ICreateUserDocument } from "./user.types.ts";

/*
  Finds an active, non-deleted user by email.
 */
export const findUserByEmail = async (
  email: string,
): Promise<UserDocument | null> => {
  return User.findOne({
    email: email.toLowerCase().trim(),
    deletedAt: null,
  });
};

/*
  Creates a new user.
  The password must already be hashed before
  reaching this function.
 */
export const createUser = async (
  data: ICreateUserDocument,
): Promise<UserDocument> => {
  return User.create(data);
};
