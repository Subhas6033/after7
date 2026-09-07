import { Model, Schema, model } from "mongoose";
import type { HydratedDocument } from "mongoose";
import { UserRole, UserStatus, UserGender } from "./user.types.ts";
import type { IUser } from "./user.types.ts";

/*
  A hydrated Mongoose User document. 
  This represents a User document returned by Mongoose
  with document methods and MongoDB metadata.
 */
export type UserDocument = HydratedDocument<IUser>;

/*
  Custom User model type.
  Extend this later if custom static methods are required.
 */
export interface UserModel extends Model<IUser> {}

/*
  User MongoDB schema.
  This schema defines the structure and validation rules
  for User documents stored in MongoDB.
 */
const userSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    gender: {
      type: String,
      enum: Object.values(UserGender),
      default: null,
      index: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password hash is required"],
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
      index: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerifiedAt: {
      type: Date,
      default: null,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },

    /*
      Soft-delete timestamp.
      `null` means the account has not been deleted.
     */
    deletedAt: {
      type: Date,
      default: null,
      index: true,
    },
  },
  {
    timestamps: true,
    strict: true,
    versionKey: false,
  },
);

/*
  User MongoDB indexes.
  Email already has an index through `index: true`
  and `unique: true`.
  This compound index can help queries that retrieve
  active/non-deleted users.
 */
userSchema.index({
  status: 1,
  deletedAt: 1,
});

export const User = model<IUser, UserModel>("User", userSchema);
