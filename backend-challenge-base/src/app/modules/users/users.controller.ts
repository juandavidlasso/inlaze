import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { JwtAuthGuard } from "../auth/guards/jwt-authGuard";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.createUser(createUserDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<User[]> {
        return await this.usersService.getUsers();
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    async findOne(@Param("id") id: number): Promise<User> {
        return await this.usersService.getUserById(id);
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    async update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return await this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    async remove(@Param("id") id: string): Promise<User | null> {
        return this.usersService.deleteUSer(+id);
    }
}
