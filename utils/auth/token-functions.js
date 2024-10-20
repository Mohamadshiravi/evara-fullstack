import { sign, verify } from "jsonwebtoken";

export async function JenerateAccessToken(payload) {
  const token = await sign({ ...payload }, process.env.privateKey, {
    expiresIn: "30s",
  });
  return token;
}
export async function VerifyAccessToken(token) {
  try {
    const payload = await verify(token, process.env.privateKey);
    return payload;
  } catch (error) {
    return false;
  }
}
//-----------------------------------
export async function JenerateRefreshToken(payload) {
  const token = await sign({ ...payload }, process.env.privateKey, {
    expiresIn: "15d",
  });
  return token;
}
export async function VerifyRefreshToken(token) {
  try {
    const payload = await verify(token, process.env.privateKey);
    return payload;
  } catch (error) {
    return false;
  }
}
