import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";
import { AuthResponse } from "./types/auth-response";
import { User } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { AuthInput } from "./dto/auth-input";

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async authenticateUser(authInput: AuthInput): Promise<AuthResponse> {
        try {
            const user = await this.usuarioService.getUserByEmail(authInput.email);

            if (!bcryptjs.compareSync(authInput.password, user.password))
                throw new Error("Email o contraseña incorrecto.");

            const token = await this.jwtService.signAsync({
                id_usuario: user.idUser,
            });

            return {
                token,
                user,
            };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async validateUserService(id: number): Promise<User> {
        try {
            const user = await this.usuarioService.getUserById(id);

            return user;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
