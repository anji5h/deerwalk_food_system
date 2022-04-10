import { hash, genSalt, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  return hash(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
  return compare(password, hash);
};
