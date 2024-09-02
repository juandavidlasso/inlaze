import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./modules/users/entities/user.entity";
import { UsersController } from "./modules/users/users.controller";
import { UsersService } from "./modules/users/users.service";
import { ConfigModule } from "@nestjs/config";
import { Auth } from "./modules/auth/entities/auth.entity";
import { AuthController } from "./modules/auth/auth.controller";
import { AuthService } from "./modules/auth/auth.service";
import { Movie } from "./modules/movies/entities/movie.entity";
import { MoviesModule } from "./modules/movies/movies.module";
import { MoviesController } from "./modules/movies/movies.controller";
import { MoviesService } from "./modules/movies/movies.service";

@Module({
    imports: [
        ConfigModule.forRoot(),
        // Conexion con Sequelize en DEV
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: process.env.DB_HOST_DEV,
            port: +process.env.DB_PORT_DEV!,
            username: process.env.DB_USERNAME_DEV,
            database: process.env.DB_DATABASE_DEV,
            models: [User, Movie],
        }),
        SequelizeModule.forFeature([User, Auth, Movie]),

        // Conexion con Sequelize en PROD
        // SequelizeModule.forRoot({
        // 	dialect: 'mysql',
        // 	host: process.env.DB_HOST,
        // 	username: process.env.DB_USERNAME,
        // 	password: process.env.DB_PASSWORD,
        // 	database: process.env.DB_NAME,
        // 	models: [],
        // }),

        UsersModule,

        AuthModule,

        MoviesModule,
    ],
    controllers: [UsersController, AuthController, MoviesController],
    providers: [UsersService, AuthService, MoviesService],
})
export class AppModule {}
