import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./types/auth-response";
import { AuthInput } from "./dto/auth-input";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    async autenticateUser(@Body() authDto: AuthInput): Promise<AuthResponse> {
        return this.authService.authenticateUser(authDto);
    }
}
