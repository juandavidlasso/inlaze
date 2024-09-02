export interface MovieState {
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

export interface DataMovie {
    category: CategoryMovie;
    movies: MovieState[];
}

export type CategoryMovie = "popular" | "now_playing" | "upcoming" | "top_rated";
