import ConnectTODB from "@/config/connect-to-DB";
import evaraUserModel from "@/models/evara-user";
import { VerifyAccessToken } from "@/utils/auth/token-functions";
import RefreshToken from "@/utils/refresh-token/refresh-token";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const userToken = cookies().get("token")?.value;

    if (!userToken) {
      return Response.json({ m: "user token invalid" }, { status: 401 });
    }

    const isTokenValid = await VerifyAccessToken(userToken);

    //refresh token here
    if (!isTokenValid) {
      const refreshToken = await RefreshToken();
      if (!refreshToken) {
        return Response.json({ m: "user token invalid" }, { status: 401 });
      } else {
        return Response.json(
          { data: refreshToken.user },
          {
            status: 200,
            headers: {
              "Set-Cookie": `token=${refreshToken.token};path=/;httpOnly=true`,
            },
          }
        );
      }
    }

    ConnectTODB();

    const theUser = await evaraUserModel.findOne(
      { email: isTokenValid.email },
      "-__v -password"
    );

    if (!theUser) {
      return Response.json({ m: "user not found" }, { status: 404 });
    }

    return Response.json({ data: theUser });
  } catch (e) {
    console.log(e);
    return Response.json({ m: "error" }, { status: 500 });
  }
}
