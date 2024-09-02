import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column } from "sequelize-typescript";

export class CreateMovieDto {
    @Column({ allowNull: false })
    @IsBoolean()
    @IsNotEmpty()
    adult: boolean = false;

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    backdrop_path: string = "";

    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    genre_ids: number = 0;

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    original_language: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    original_title: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    overview: string = "";

    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    popularity: number = 0;

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    poster_path: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    release_date: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    title: string = "";

    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    video: boolean = false;

    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    vote_average: number = 0;

    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    vote_count: number = 0;
}
