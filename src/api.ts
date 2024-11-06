import { IMovieDetail, IMovies } from "./types";

const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export async function getPopular(): Promise<IMovies> {
  return fetch(`${BASE_URL}/popular`).then((response) => response.json());
}

export async function getNowPlaying(): Promise<IMovies> {
  return fetch(`${BASE_URL}/now-playing`).then((response) => response.json());
}

export async function getComingSoon(): Promise<IMovies> {
  return fetch(`${BASE_URL}/coming-soon`).then((response) => response.json());
}

export async function getMovie(id: number): Promise<IMovieDetail> {
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
