import { compare, hash } from "bcryptjs";

export async function HashPass(password) {
  const output = await hash(password, 12);
  return output;
}
export async function VerifyPass(password, hashedPassword) {
  const output = await compare(password, hashedPassword);
  return output;
}
