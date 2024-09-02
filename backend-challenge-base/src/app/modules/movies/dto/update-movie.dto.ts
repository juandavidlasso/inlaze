import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";
import { Column } from "sequelize-typescript";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    idMovie: number = 0;
}
