export async function register() {
  //   console.log("🔶🔶🔶 [1] instrumentation.ts 실행됨");
  if (process.env.NODE_ENV === "development") {
    // console.log("🔶 [2] 개발 환경 확인됨");
    if (process.env.NEXT_RUNTIME === "nodejs") {
      //   console.log("🔶 [3] Node.js 런타임 확인됨");
      const { server } = await import("./mocks/node");
      //   console.log("🔶 [4] MSW 서버 임포트 완료");
      server.listen({
        onUnhandledRequest: "bypass",
      });
      console.log("✅ MSW Server 활성화됨");
    } else {
      //   console.log("❌ Node.js 런타임이 아님:", process.env.NEXT_RUNTIME);
    }
  } else {
    // console.log("❌ 개발 환경이 아님:", process.env.NODE_ENV);
  }
}
