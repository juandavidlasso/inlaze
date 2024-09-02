"use client";
import React, { useContext } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    IconButton,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import { MovieContext } from "@/app/shared/stateManagement/context/MovieContext";

interface Props {}

const Panel: React.FC<Props> = ({}) => {
    const { movieSelected } = useContext(MovieContext);
    console.log("111", movieSelected);

    return (
        <Box
            width={"100%"}
            sx={{
                height: { xs: "fit-content", sm: "436px" },
            }}>
            <Card
                sx={{
                    position: "relative",
                    height: "100%",
                    color: "white",
                    borderRadius: 0,
                }}>
                <CardMedia
                    component="img"
                    image={
                        !movieSelected
                            ? "https://m.media-amazon.com/images/S/pv-target-images/d775fb8599018935d1e28ed9cbc2fb67870d726d850f0eee13dc6f50f37b76d3.jpg"
                            : `https://image.tmdb.org/t/p/w500${movieSelected.backdrop_path}`
                    }
                    alt={"fondo"}
                    sx={{ height: "100%", filter: "brightness(50%)" }}
                />
                <CardContent
                    sx={{
                        position: { xs: "relative", sm: "absolute" },
                        bottom: 0,
                        left: 0,
                        padding: 2,
                        background:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 30%)",
                        borderRadius: 1,
                        height: {
                            xs: "fit-content",
                            sm: movieSelected ? "90%" : "30%",
                        },
                        display: { xs: "block", sm: "flex" },
                        justifyContent: { xs: "center", sm: "space-between" },
                        alignItems: "center",
                    }}>
                    <Box
                        sx={{
                            height: { xs: "fit-content", sm: "100%" },
                            width: { xs: "100%", sm: movieSelected ? "20%" : "70%" },
                            display: movieSelected ? "flex" : "block",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        {movieSelected ? (
                            <Box
                                sx={{
                                    width: "90%",
                                    height: "95%",
                                    textAlign: "center",
                                }}>
                                <Image
                                    src={
                                        !movieSelected
                                            ? "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"
                                            : `https://image.tmdb.org/t/p/w500${movieSelected.backdrop_path}`
                                    }
                                    alt="movie"
                                    width={100}
                                    height={100}
                                    style={{ height: "80%", width: "100%" }}
                                />
                                <Button
                                    sx={{
                                        width: "90%",
                                        background: "#F0B90B",
                                        borderRadius: "4px",
                                        mt: 1,
                                        textTransform: "capitalize",
                                        color: "#343434",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        lineHeight: "14px",
                                        height: "46px",
                                        p: "16px",
                                    }}>
                                    Official Trailer
                                </Button>
                            </Box>
                        ) : (
                            <>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: "35px",
                                        lineHeight: "39px",
                                    }}>
                                    Kung Fu Panda 4
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                        lineHeight: "24px",
                                        fontWeight: 700,
                                        mt: 3,
                                    }}>
                                    Join Po and the Furious Five on a new epic adventure! Discover
                                    the power of friendship and the strength within! Get ready to
                                    unleash your inner warrior! 🥋✨
                                </Typography>
                            </>
                        )}
                    </Box>
                    <Box
                        sx={{
                            width: { xs: "100%", sm: movieSelected ? "80%" : "30%" },
                            height: {
                                xs: "fit-content",
                                sm: "100%",
                            },
                        }}>
                        {movieSelected ? (
                            <Box
                                sx={{
                                    display: { xs: "block", sm: "grid" },
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    height: "100%",
                                    pl: { xs: 0, sm: 5 },
                                }}>
                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "35px",
                                        fontWeight: 700,
                                        lineHeight: "39px",
                                    }}>
                                    {!movieSelected
                                        ? "Top Gun Maverick (2022)"
                                        : movieSelected.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: "16.8px",
                                    }}>
                                    January 17, 2022.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "24px",
                                        fontWeight: 700,
                                        lineHeight: "28px",
                                    }}>
                                    Overview:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        lineHeight: "22px",
                                    }}>
                                    {!movieSelected
                                        ? `
										Top Gun: Maverick" is a high-octane action drama that serves as
                                    a sequel to the iconic 1986 film "Top Gun." Directed by Joseph
                                    Kosinski, the movie follows Captain Pete "Maverick" Mitchell,
                                    played by Tom Cruise, who has spent over thirty years as a naval
                                    aviator, dodging promotions that would ground him. When he is
                                    assigned to train a new generation of Top Gun graduates for a
                                    specialized mission, he confronts his past and the ghosts of his
                                    fallen friends.`
                                        : movieSelected.overview}
                                </Typography>
                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "inline-flex",
                                        width: { xs: "none", sm: "10%" },
                                    }}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={movieSelected?.vote_average}
                                        sx={{
                                            width: "92px !important",
                                            height: "92px !important",
                                            color: "#4DA14F",
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
                                            component="div"
                                            sx={{
                                                color: "#FFFFFF",
                                                fontSize: "28px",
                                                fontWeight: 700,
                                                lineHeight: "36px",
                                            }}>{`${movieSelected?.vote_average?.toFixed(1)}%`}</Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "block", sm: "flex" },
                                        gap: 4,
                                        width: { xs: "100%", sm: "90%" },
                                        margin: "0 auto",
                                    }}>
                                    <Typography
                                        sx={{
                                            color: "#F1CB51",
                                            border: "1px solid #F1CB51",
                                            borderRadius: "5px",
                                            padding: "8px 16px 8px 16px",
                                            gap: "8px",
                                            width: "fit-content",
                                        }}>
                                        Aviation
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#F1CB51",
                                            border: "1px solid #F1CB51",
                                            borderRadius: "5px",
                                            padding: "8px 16px 8px 16px",
                                            gap: "8px",
                                            width: "fit-content",
                                        }}>
                                        Aviation
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#F1CB51",
                                            border: "1px solid #F1CB51",
                                            borderRadius: "5px",
                                            padding: "8px 16px 8px 16px",
                                            gap: "8px",
                                            width: "fit-content",
                                        }}>
                                        Aviation
                                    </Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    height: { xs: "90px" },
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 5,
                                    pt: 2,
                                    pb: 2,
                                }}>
                                <IconButton sx={{ color: "white" }}>
                                    <FavoriteIcon sx={{ color: "#FFFFFF" }} />
                                </IconButton>

                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "inline-flex",
                                    }}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={97}
                                        sx={{
                                            width: "92px !important",
                                            height: "92px !important",
                                            color: "#4DA14F",
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
                                            component="div"
                                            sx={{
                                                color: "#FFFFFF",
                                                fontSize: "28px",
                                                fontWeight: 700,
                                                lineHeight: "36px",
                                            }}>{`97%`}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Panel;
