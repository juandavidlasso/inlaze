import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column } from "sequelize-typescript";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Column({ allowNull: false })
    @IsNumber()
    @IsNotEmpty()
    idUser: number = 0;
}
