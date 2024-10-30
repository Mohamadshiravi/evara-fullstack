import { sign, verify } from "jsonwebtoken";

export function JenerateAccessToken(payload) {
  const token = sign({ ...payload }, process.env.privateKey, {
    expiresIn: "30s",
  });
  return token;
}
export function VerifyAccessToken(token) {
  try {
    const payload = verify(token, process.env.privateKey);
    return payload;
  } catch (error) {
    return false;
  }
}
//-----------------------------------
export function JenerateRefreshToken(payload) {
  const token = sign({ ...payload }, process.env.privateKey, {
    expiresIn: "15d",
  });
  return token;
}
export function VerifyRefreshToken(token) {
  try {
    const payload = verify(token, process.env.privateKey);
    return payload;
  } catch (error) {
    return false;
  }
}
