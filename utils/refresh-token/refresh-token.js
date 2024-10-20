import { cookies } from "next/headers";
import {
  JenerateAccessToken,
  VerifyRefreshToken,
} from "../auth/token-functions";
import evaraUserModel from "@/models/evara-user";
import ConnectTODB from "@/config/connect-to-DB";

export default async function RefreshToken() {
  const refToken = cookies().get("refresh-token")?.value;

  if (!refToken) {
    return false;
  }

  ConnectTODB();

  const isRefreshForUs = await evaraUserModel.findOne(
    {
      refreshToken: refToken,
    },
    "-__v -password"
  );
  if (!isRefreshForUs) {
    return false;
  }

  const verifyRefToken = await VerifyRefreshToken(refToken);
  if (!verifyRefToken) {
    return false;
  }

  const token = await JenerateAccessToken({ email: isRefreshForUs.email });

  console.log("token - refresh");

  return { user: isRefreshForUs, token };
}
