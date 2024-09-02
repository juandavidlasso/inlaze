import { Column, Entity } from "typeorm";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

@Entity()
export class AuthInput {
    @Column({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string = "";

    @Column({ nullable: false })
    @IsString()
    @IsNotEmpty()
    password: string = "";
}
