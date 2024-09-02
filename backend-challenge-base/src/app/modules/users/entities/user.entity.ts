import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: false,
})
export class User extends Model<User> {
    @Column({ allowNull: false, primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    idUser: number = 0;

    @Column({ allowNull: false, type: DataType.STRING })
    name: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    email: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    password: string = "";
}
