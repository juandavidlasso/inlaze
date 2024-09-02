import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import * as bcryptjs from "bcryptjs";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private readonly userRepository: typeof User,
    ) {}

    // Creo usuario en la DB
    async createUser(createUsuarioInput: CreateUserDto): Promise<any> {
        try {
            return true;
            // return this.userRepository.create({
            //     ...createUsuarioInput,
            //     password: bcryptjs.hashSync(createUsuarioInput.password, 10),
            // });
        } catch (error: any) {
            throw new Error(error);
        }
    }

    // Obtengo todos los usuarios de la DB
    async getUsers(): Promise<User[]> {
        try {
            const users = await this.userRepository.findAll();

            if (!users.length) throw new Error("No hay usuarios registrados.");

            return users;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    // Obtengo un usuario de la DB
    async getUserById(idUser: number): Promise<User> {
        try {
            const user = await this.userRepository.findOne({ where: { idUser } });

            if (!user) throw new Error("El usuario no esta registrado.");

            return user;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    // Obtengo un usuario por email de la DB
    async getUserByEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({ where: { email } });

            if (!user) throw new Error("El usuario no esta registrado.");

            return user;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    // Actualizo un usuario de la DB
    async updateUser(idUser: number, updateUsuarioInput: UpdateUserDto): Promise<User> {
        try {
            const user = await this.userRepository.findOne({ where: { idUser } });

            if (!user) throw new Error("El usuario no esta registrado.");

            if (updateUsuarioInput.password) {
                updateUsuarioInput.password = bcryptjs.hashSync(updateUsuarioInput.password, 10);
            }

            return await user.update(updateUsuarioInput);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    // Mock eliminar un usuario de la DB
    async deleteUSer(idUser: number): Promise<User | null> {
        try {
            const user = await this.userRepository.findOne({ where: { idUser } });
            return user;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
