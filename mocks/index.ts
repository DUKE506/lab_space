import React from "react";

export async function initMocks() {
  if (typeof window === "undefined") {
    //서버 사이드 (Node.js)
    const { server } = await import("./node");
    server.listen({
      onUnhandledRequest: "bypass", //모킹하지 않은 요청은 통과
    });
    console.log("✅ MSW Server (Node.js) 활성화");
  } else {
    //클라이언트 사이드 (브라우저)
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
    console.log("✅ MSW Worker (Browser) 활성화");
  }
}
