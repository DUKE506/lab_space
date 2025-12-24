import { http, HttpResponse } from "msw";
import userList from "./auth/account-dummy.json";
import { createJwt } from "@/lib/jwt";

const MSW_URL = process.env.NEXT_PUBLIC_MSW_URL || "http://localhost:3333";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_MSW_URL}/api/users`, () => {
    return HttpResponse.json(userList);
  }),
  http.post(
    `${process.env.NEXT_PUBLIC_MSW_URL}/api/login`,
    async ({ request }) => {
      const body = (await request.json()) as {
        email: string;
        password: string;
      };
      const user = userList.find(
        (v) => v.account === body.email && v.pw === body.password
      );

      if (!user)
        return HttpResponse.json(
          { error: "아이디 비밀번호를 확인해주세요." },
          { status: 401 }
        );
      const { pw, ...rest } = user;
      const jwt = await createJwt(rest);
      return HttpResponse.json({ user: rest, accessToken: jwt });
    }
  ),
];
