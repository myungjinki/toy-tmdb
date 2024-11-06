const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export interface Popular {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export async function getPopular(): Promise<Popular> {
  return fetch(`${BASE_URL}/popular`).then((response) => response.json());
}

export async function getNowPlaying() {
  return fetch(`${BASE_URL}/now-playing`).then((response) => response.json());
}

export async function getComingSoon() {
  return fetch(`${BASE_URL}/coming-soon`).then((response) => response.json());
}

export async function getMovie(id: number) {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((response) =>
    response.json()
  );
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
