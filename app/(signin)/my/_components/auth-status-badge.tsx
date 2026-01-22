import { useAuthStore } from "@/store/auth-store";
import { CircleCheckIcon, CircleXIcon, InfoIcon } from "lucide-react";
import React from "react";

export const AuthStatusBadge = () => {
  const user = useAuthStore((state) => state.user);
  const isProfileCompleted = user?.isProfileCompleted;

  if (!isProfileCompleted)
    return (
      <div className="w-full bg-linear-to-r from-(--warning-dark) to-(--warning) p-6 rounded-sm ">
        <div className="flex items-start gap-6">
          <InfoIcon className="text-(--surface)" size={32} />
          <div className="flex flex-col gap-4">
            <span className="text-lg text-(--surface) font-semibold">
              추가 정보 입력이 필요합니다
            </span>
            <span className="text-(--surface) text-sm">
              전체 기능을 사용하려면 추가 정보를 입력해주세요. 추가 정보 입력 후
              연구실에 가입해보세요.
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-(--surface)">
                <CircleCheckIcon strokeWidth={1.5} />
                <span>연구실 둘러보기</span>
              </div>
              <div className="flex items-center gap-2 text-(--surface)/70">
                <CircleXIcon strokeWidth={1.5} />
                <span>연구실 둘러보기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

// return (
//       <div className="w-full bg-linear-to-r from-(--success-light) to-(--success) p-6 rounded-sm ">
//         <div className="flex items-center gap-6">
//           <div className="p-2.5 aspect-square rounded-full bg-(--surface)/30">
//             <CircleCheckIcon className="text-(--surface)" size={32} />
//           </div>

//           <div className="flex flex-col gap-1">
//             <span className="text-lg text-(--surface) font-semibold">
//               프로필 설정 완료
//             </span>
//             <span className="text-(--surface) text-sm">
//               모든 시스템 기능을 이용하실 수 있습니다.
//             </span>
//           </div>
//         </div>
//       </div>
//     );
