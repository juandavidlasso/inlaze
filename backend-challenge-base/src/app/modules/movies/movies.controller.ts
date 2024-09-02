import { Controller, Get, Post, Body, Patch, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Controller("movies")
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    async createFavoriteMovie(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.createFavoriteMovieService(createMovieDto);
    }

    @Get("list")
    async getMovies() {
        return this.moviesService.getMoviesService();
    }

    @Get("list/:id")
    async getMovieById(@Param("id") id: string) {
        return this.moviesService.getMovieByIdService(+id);
    }

    @Patch(":id")
    async updateFavoriteMovie(@Param("id") id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.updateFavoriteMovieService(+id, updateMovieDto);
    }
}
