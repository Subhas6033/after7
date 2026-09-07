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
  Represents the user's gender.
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
  This interface represents the application-level data
  stored in a MongoDB User document.
 */
export interface IUser {
  email: string;
  name: string;
  gender: UserGender | null;
  passwordHash: string;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  emailVerifiedAt: Date | null;
  lastLoginAt: Date | null;
  /*
    Soft-delete timestamp.
    null means the account has not been deleted.
   */
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/*
  Data received when creating a new user.
  `password` represents the plain-text password
  received from the client.
  The password must be hashed before it is stored
  in MongoDB.
 */
export interface ICreateUser {
  email: string;
  name: string;
  gender?: UserGender | null;
  password: string;
  role?: UserRole;
}

/*
  Data passed from the service layer to the
  user repository when creating a MongoDB document.
  At this point the plain-text password has already
  been converted into `passwordHash`.
  Fields marked optional have defaults defined
  inside the Mongoose schema.
 */
export interface ICreateUserDocument {
  email: string;
  name: string;
  gender: UserGender | null;

  /*
    Hashed password.
    Never store the plain-text password here.
   */
  passwordHash: string;

  /*
    Mongoose provides the defaults for these fields
    when they are not supplied.
   */
  role?: UserRole;
  status?: UserStatus;
  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;
  lastLoginAt?: Date | null;
  deletedAt?: Date | null;
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
  Sensitive fields such as `passwordHash` are
  intentionally excluded.
  MongoDB's `_id` is converted to a string `id`.
 */
export interface IUserResponse {
  id: string;
  email: string;
  name: string;
  gender: UserGender | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  emailVerifiedAt: Date | null;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
