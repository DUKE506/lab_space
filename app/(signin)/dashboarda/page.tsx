import { auth } from "@/auth";
import { LogoutButton } from "@/components/features/auth/logout-button";

export default async function Page() {
  const session = await auth();

  return (
    <div className="text-xl font-medium">
      <p>현재 페이지는 로그인을 한 사용자만 접근이 가능한 페이지입니다.</p>
      <br />
      <p>
        proxy.ts 파일을 수정하여 사용자 정보에 따라 접근 가능 페이지를 지정할 수
        있습니다.
      </p>
      <br />
      <p className="font-bold">Authentication(인증)</p>
      <p>Next-Auth 5.0으로 Authentication을 관리하고 있습니다. </p>
      <br />
      <div className="text-lg">
        <p className="text-(--primary)">[project folder] </p>
        <p>
          ├──── [auth.ts] 에서 커스텀 로그인(credential) 또는 OAuth를 추가 및
          수정할 수 있습니다.
        </p>
        <p>└──── types</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└────
          [next-auth.d.ts] 에서 jwt 또는 session에 저장할 User, JWT, Session
          타입을 수정할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
