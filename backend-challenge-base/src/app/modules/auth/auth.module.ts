import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./strategies/jwt-strategy";

@Module({
    providers: [AuthController, AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule, JwtModule],
    imports: [
        ConfigModule,
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: "20h",
                },
            }),
        }),

        UsersModule,
    ],
})
export class AuthModule {}
