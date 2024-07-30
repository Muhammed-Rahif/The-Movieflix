import { xiorInstance } from "./api";
import type { GetTrendingAllResponse } from "./trending.d";

type TimeWindow = "day" | "week";

export class Trending {
  // https://developer.themoviedb.org/reference/trending-all
  public static async getAll({
    timeWindow = "day",
    page = 1,
  }: {
    timeWindow?: TimeWindow;
    page?: number;
  } = {}): Promise<GetTrendingAllResponse> {
    const url = `/trending/all/${timeWindow}?language=en-US&page=${page}`;
    const res = await xiorInstance.get<GetTrendingAllResponse>(url);
    return res.data;
  }
}
