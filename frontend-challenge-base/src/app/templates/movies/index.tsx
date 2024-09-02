"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Categories from "../categories";
import { useMovie } from "@/app/shared/hooks/movies/useMovie";

interface Props {}

const Movies: React.FC<Props> = ({}) => {
    const { getMovies, movies } = useMovie();

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Box>
            {movies.map((movie) => {
                if (movie.category === "popular")
                    return <Categories category="Popular" movies={movie.movies} />;
                if (movie.category === "now_playing")
                    return <Categories category="Now Paying" movies={movie.movies} />;
                if (movie.category === "upcoming")
                    return <Categories category="Upcoming" movies={movie.movies} />;
                if (movie.category === "top_rated")
                    return <Categories category="Top Rated" movies={movie.movies} />;
            })}
        </Box>
    );
};

export default Movies;
