import { xiorInstance } from "./api";
import {
  CreateSessionResponse,
  GetRequestTokenData as GetRequestTokenResponse,
} from "./authentication.d";

export type LoginUserData = {
  username: string;
  password: string;
  request_token: string;
};

export class Authentication {
  // https://developer.themoviedb.org/reference/authentication-create-request-token
  public static async getRequestToken() {
    const url = `/authentication/token/new`;
    const res = await xiorInstance.get<GetRequestTokenResponse>(url);
    return res.data;
  }

  // https://developer.themoviedb.org/reference/authentication-create-session-from-login
  public static async loginUser(data: LoginUserData) {
    const url = `/authentication/token/validate_with_login`;
    const res = await xiorInstance.post<GetRequestTokenResponse>(url, data);
    return res.data;
  }

  // https://developer.themoviedb.org/reference/authentication-create-session
  public static async createSession(request_token: string) {
    const url = `/authentication/session/new`;
    const res = await xiorInstance.post<CreateSessionResponse>(url, {
      request_token,
    });
    return res.data;
  }
}
