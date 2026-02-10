import { User } from "../user";

export interface LoginResponse {
  accessToken: string;
  refrehsToken: string;
  user: User;
}
