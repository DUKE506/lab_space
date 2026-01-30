import ky from "ky";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export const apiManager = ky.create({
  prefixUrl: BASE_URL,
  //   credentials: "include",
  hooks: {
    beforeRequest: [
      (request, options, { retryCount }) => {
        if (retryCount === 0) {
          request.headers.set(
            "Authorization",
            `Bearer ${localStorage.getItem("accessToken")}`,
          );
        }
      },
    ],
  },
});
