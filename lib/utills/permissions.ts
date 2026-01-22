import { User } from "@/types/user";

/**
 * 사용자 메뉴 접근 권한
 * --
 */
export const MenuPermission = {
  requiresLab: (user: User | null): boolean => {
    if (!user) return false;

    return (
      user.userType !== "GUEST" &&
      user.labId !== null &&
      user.labId !== undefined
    );
  },

  //관리자 전용

  //로그인만 했을 경우
  requiresAuth: (user: User | null): boolean => {
    return !!user;
  },
};
