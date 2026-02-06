import { MenuItem } from "@/types/user-menu";
import { MenuPermission } from "../utills/permissions";

//사이드 바 메뉴
export const menuItems: MenuItem[] = [
  // {
  //   title: "홈",
  //   icon: "streamline-ultimate-color:space-astronaut",
  //   url: "/home",
  //   groupName: "메인",
  //   canAccess: MenuPermission.requiresAuth,
  // },
  {
    title: "프로젝트",
    icon: "flat-color-icons:folder",
    url: "/projects",
    canAccess: MenuPermission.requiresLab,
  },
  {
    title: "멤버",
    icon: "fluent-color:people-16",
    url: "/members",
    canAccess: MenuPermission.requiresLab,
  },
  {
    title: "설정",
    icon: "fluent-color:settings-16",
    url: "/settings",
    canAccess: MenuPermission.requiresLab,
  },
];
