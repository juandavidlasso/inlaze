import React, { useContext } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    IconButton,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieState } from "@/app/shared/models/movie";
import { MovieContext } from "@/app/shared/stateManagement/context/MovieContext";

interface Props {
    movie: MovieState;
}

const Movie: React.FC<Props> = ({ movie }) => {
    const { selectedMovie } = useContext(MovieContext);
    return (
        <Card
            sx={{ height: "335px", background: "#262626", cursor: "pointer" }}
            onClick={() => selectedMovie(movie)}>
            <CardMedia
                sx={{ height: "60%" }}
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                title="green iguana"
            />
            <CardContent sx={{ background: "#262626" }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                        color: "#F6F6F6",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "20px",
                    }}>
                    {movie.title}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                        color: "#F6F6F6",
                        fontSize: "9px",
                        fontWeight: 400,
                        lineHeight: "10px",
                    }}>
                    August 1, 2024
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "45px",
                        mt: 2,
                    }}>
                    <Box
                        width={"50%"}
                        textAlign={"right"}
                        sx={{
                            height: "100%",
                            display: "block",
                            alignItems: "center",
                        }}>
                        <Typography
                            sx={{
                                color: "#F6F6F6",
                                fontSize: "9px",
                                fontWeight: 400,
                                lineHeight: "10px",
                                mb: 0.5,
                            }}>
                            Rating
                        </Typography>
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}>
                            <CircularProgress
                                variant="determinate"
                                value={movie.vote_average}
                                sx={{
                                    width: "25px !important",
                                    height: "25px !important",
                                    color: "#4DA14F", //FF8800
                                }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "9px",
                                        fontWeight: 400,
                                        lineHeight: "10px",
                                    }}>{`${movie.vote_average}%`}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        width={"50%"}
                        textAlign={"left"}
                        sx={{
                            height: "100%",
                            display: "block",
                            alignItems: "center",
                            pl: 2,
                        }}>
                        <Typography
                            sx={{
                                color: "#F6F6F6",
                                fontSize: "9px",
                                fontWeight: 400,
                                lineHeight: "10px",
                                mb: 0.5,
                            }}>
                            Favorites
                        </Typography>
                        <IconButton sx={{ color: "white", p: 0 }}>
                            <FavoriteIcon sx={{ color: "#FFFFFF" }} />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Movie;
