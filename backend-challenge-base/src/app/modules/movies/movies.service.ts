import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class MoviesService {
    constructor(
        @InjectModel(Movie)
        private readonly movieRepository: typeof Movie,
    ) {}

    async createFavoriteMovieService(createMovieDto: CreateMovieDto): Promise<any> {
        try {
            return true;
            // return await this.movieRepository.create(createMovieDto);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getMoviesService(): Promise<Movie[]> {
        try {
            return await this.movieRepository.findAll();
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getMovieByIdService(id: number): Promise<Movie> {
        try {
            const movie = await this.movieRepository.findOne({ where: { idMovie: id } });
            return movie!;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async updateFavoriteMovieService(id: number, updateMovieDto: UpdateMovieDto) {
        try {
            const movie = await this.movieRepository.findOne({ where: { idMovie: id } });

            if (!movie) throw new Error("La pelicula no existe.");

            return await movie.update(updateMovieDto);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
