import React from "react";
import { Grid2, Typography } from "@mui/material";
import Movie from "../movies/Movie";
import { MovieState } from "@/app/shared/models/movie";

interface Props {
    category: string;
    movies: MovieState[];
}

const Categories: React.FC<Props> = ({ category, movies }) => {
    return (
        <>
            <Grid2 size={12} sx={{ p: 2 }}>
                <Typography
                    sx={{
                        color: "#FFFFFF",
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "28px",
                    }}>
                    {category}
                </Typography>
            </Grid2>
            <Grid2 container>
                {movies.length &&
                    movies.map((movie) => (
                        <Grid2 key={movie.id} size={{ xs: 12, sm: 2.4 }} sx={{ p: 1 }}>
                            <Movie movie={movie} />
                        </Grid2>
                    ))}
            </Grid2>
        </>
    );
};

export default Categories;
