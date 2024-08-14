export interface GetGenresResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
