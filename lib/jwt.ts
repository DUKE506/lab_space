import { SignJWT } from "jose";

export async function createJwt(payload: Record<string, any>): Promise<string> {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);
  console.log("토큰 생성 : ", jwt);
  return jwt;
}
