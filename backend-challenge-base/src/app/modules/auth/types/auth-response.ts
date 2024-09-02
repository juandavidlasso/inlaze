import { Column, Entity } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class AuthResponse {
    @Column(() => String)
    token: string = "";

    @Column(() => User)
    user: User | undefined;
}
