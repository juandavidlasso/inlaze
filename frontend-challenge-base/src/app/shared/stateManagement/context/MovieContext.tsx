"use client";
import React, { createContext, useState } from "react";
import { MovieState } from "../../models/movie";

interface MovieContextState {
    movieSelected: MovieState | undefined;
    setMovieSelected: React.Dispatch<React.SetStateAction<MovieState | undefined>>;
    selectedMovie: (movie: MovieState) => void;
}

export const MovieContext = createContext<MovieContextState>({} as MovieContextState);

export const MovieProvider = ({ children }) => {
    const [movieSelected, setMovieSelected] = useState<MovieState>();

    const selectedMovie = (movie: MovieState) => setMovieSelected(movie);

    return (
        <MovieContext.Provider
            value={{
                movieSelected,
                setMovieSelected,
                selectedMovie,
            }}>
            {children}
        </MovieContext.Provider>
    );
};
