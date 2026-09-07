import { Types } from "mongoose";

/*
  Roles available in the After7 application.
 */
export enum UserRole {
  USER = "user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

/*
  Represents the current state of a user account.
 */
export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
  DELETED = "deleted",
}

/*
  Represents the users gender.
*/
export enum UserGender {
  MALE = "male",
  FEMALE = "female",
  NON_BINARY = "non_binary",
  OTHER = "other",
  PREFER_NOT_TO_SAY = "prefer_not_to_say",
}

/*
  Main User document shape.
  This interface represents the data stored in MongoDB.
 */
export interface IUser {
  _id: Types.ObjectId;

  email: string;
  name: string;
  gender: UserGender;
  passwordHash: string;

  role: UserRole;
  status: UserStatus;

  emailVerified: boolean;
  emailVerifiedAt: Date | null;

  lastLoginAt: Date | null;

  createdAt: Date;
  updatedAt: Date;

  deletedAt: Date | null;
}

/*
  Data required when creating a new user.
  `password` is the plain-text password received from the client.
  It must be hashed before being stored in MongoDB.
 */
export interface ICreateUser {
  email: string;
  name: string;
  password: string;
  role?: UserRole;
}

/*
  Fields that can be updated on a user account.
 */
export interface IUpdateUser {
  email?: string;
  name?: string;
}

/*
  Safe user response returned to the client.
  Never expose passwordHash or other sensitive internal fields.
 */
export interface IUserResponse {
  id: string;

  email: string;
  name: string;
  gender: string;

  role: UserRole;
  status: UserStatus;

  emailVerified: boolean;
  emailVerifiedAt: Date | null;

  lastLoginAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}
