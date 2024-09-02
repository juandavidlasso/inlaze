import { useState } from "react";
import { CategoryMovie, DataMovie } from "../../models/movie";
import axios from "axios";

export const useMovie = () => {
    const [movies, setMovies] = useState<DataMovie[]>([]);
    const getMovies = async () => {
        const newMoviesData: DataMovie[] = [];
        const genres: CategoryMovie[] = ["popular", "now_playing", "upcoming", "top_rated"];
        for (let index = 0; index < genres.length; index++) {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${genres[index]}?language=en-US&page=1`,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzk2MWU4NjY2MzE0MDY4ZWRlNWIxZjMzYTdiMTQyNiIsIm5iZiI6MTcyNTI3ODk5Ny4yNTgxLCJzdWIiOiI2NmQ0ZDIyZjZlOTc5NTNiMDU5NDc1YjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1XnBlyywn1YVdsbRsXI4_kePn56gL4g3d2lIXCBI5UI",
                    },
                },
            );
            const newMovies = response.data.results;
            newMoviesData.push({
                category: genres[index],
                movies: newMovies,
            });
        }
        setMovies(newMoviesData);
    };

    return {
        movies,
        getMovies,
    };
};
