import xior from "xior";

export const baseUrl = "https://api.themoviedb.org/3/";
export const imgBaseUrl = "https://image.tmdb.org/t/p/";

export const xiorInstance = xior.create({
  baseURL: baseUrl,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});
