import argon2 from "argon2";

/*
  Hashes a plain-text password using Argon2id.
  The resulting hash is safe to store in MongoDB.
 */
export const hashPassword = async (password: string): Promise<string> => {
  return argon2.hash(password, {
    type: argon2.argon2id,
  });
};

/*
  Compares a plain-text password against
  a previously generated password hash.
  Returns true when the password matches.
 */
export const comparePassword = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return argon2.verify(passwordHash, password);
};
