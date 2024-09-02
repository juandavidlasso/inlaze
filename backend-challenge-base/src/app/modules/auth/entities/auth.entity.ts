import { Entity, Column } from "typeorm";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

@Entity()
export class Auth {
    @Column()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string = "";

    @Column()
    @IsString()
    @IsNotEmpty()
    password: string = "";
}
