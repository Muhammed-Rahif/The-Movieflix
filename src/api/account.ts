import { tmdbSessionIdAtom } from "../states/auth";
import { store } from "../states/storage";
import { AccountDetailsResponse } from "./account.d";
import { xiorInstance } from "./api";

export class Account {
  // https://developer.themoviedb.org/reference/account-details
  public static async getAccountDetails() {
    const session_id = store.get(tmdbSessionIdAtom);
    const url = `/account`;
    const res = await xiorInstance.get<AccountDetailsResponse>(url, {
      params: {
        session_id,
      },
    });
    return res.data;
  }
}
