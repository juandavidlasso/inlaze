import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column } from "sequelize-typescript";
// import { Entity } from "typeorm";

// @Entity()
export class CreateUserDto {
    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    name: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string = "";

    @Column({ allowNull: false })
    @IsString()
    @IsNotEmpty()
    password: string = "";
}
