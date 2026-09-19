export enum UserRole {
  USER = "user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
  DELETED = "deleted",
}

export enum UserGender {
  MALE = "male",
  FEMALE = "female",
  NON_BINARY = "non_binary",
  OTHER = "other",
  PREFER_NOT_TO_SAY = "prefer_not_to_say",
}

export enum MeetPreference {
  ANYONE = "anyone",
  SIMILAR_AGE_GENDER = "similar-age & gender",
}

export interface IUser {
  email: string;
  name: string;
  gender: UserGender | null;

  dateOfBirth: Date | null;

  profileAvatar: string | null;

  interests: string[];

  meetPreference: MeetPreference | null;

  passwordHash: string;

  role: UserRole;
  status: UserStatus;

  emailVerified: boolean;
  emailVerifiedAt: Date | null;

  lastLoginAt: Date | null;

  deletedAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  email: string;
  name: string;
  gender?: UserGender | null;

  dateOfBirth?: Date | null;

  profileAvatar?: string | null;

  interests?: string[];

  meetPreference?: MeetPreference | null;

  password: string;

  role?: UserRole;
}

export interface ICreateUserDocument {
  email: string;
  name: string;
  gender: UserGender | null;

  dateOfBirth: Date | null;

  profileAvatar: string | null;

  interests: string[];

  meetPreference: MeetPreference | null;

  passwordHash: string;

  role?: UserRole;
  status?: UserStatus;

  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;

  lastLoginAt?: Date | null;
  deletedAt?: Date | null;
}

export interface IUpdateUser {
  email?: string;
  name?: string;

  dateOfBirth?: Date | null;
  profileAvatar?: string | null;
  interests?: string[];
  meetPreference?: MeetPreference | null;
}

export interface IUserResponse {
  id: string;

  email: string;
  name: string;
  gender: UserGender | null;

  dateOfBirth: Date | null;

  profileAvatar: string | null;

  interests: string[];

  meetPreference: MeetPreference | null;

  role: UserRole;
  status: UserStatus;

  emailVerified: boolean;
  emailVerifiedAt: Date | null;

  lastLoginAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}
