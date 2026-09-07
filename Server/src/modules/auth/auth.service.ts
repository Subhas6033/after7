import { HTTP_STATUS } from "../../constants/httpConstants.constant.ts";
import { APIERR } from "../../utils/helper.utils.ts";
import { hashPassword } from "../../utils/password.utils.ts";
import { createUser, findUserByEmail } from "../users/user.repository.ts";
import { toUserResponse } from "../users/user.mapper.ts";
import type { IUserResponse } from "../users/user.types.ts";
import type { RegisterInput } from "./auth.validation.ts";

/*
  Registers a new After7 user.
 */
export const registerUser = async (
  data: RegisterInput,
): Promise<IUserResponse> => {
  /*
    Normalize the email before performing
    database operations.
   */
  const email = data.email.trim().toLowerCase();

  /*
    Check whether the email is already registered.
   */
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new APIERR(
      HTTP_STATUS.CONFLICT,
      "An account with this email already exists",
    );
  }

  /*
    Hash the plain-text password.
    The plain password will never be stored
    in MongoDB.
   */
  const passwordHash = await hashPassword(data.password);

  /*
    Create the user.
   */
  const user = await createUser({
    email,
    name: data.name.trim(),
    gender: data.gender ?? null,
    passwordHash,
  });

  /*
    Convert the MongoDB document into a safe
    response object.
   */
  return toUserResponse(user);
};
