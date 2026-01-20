import { User } from "./user";

export interface MenuItem {
  title: string;
  icon: string;
  url: string;
  groupName?: string;
  canAccess?: (user: User | null) => boolean;
}
