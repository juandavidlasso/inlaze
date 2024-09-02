import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: false,
})
export class Movie extends Model<Movie> {
    @Column({ allowNull: false, primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    idMovie: number = 0;

    @Column({ allowNull: false, type: DataType.BOOLEAN })
    adult: boolean = false;

    @Column({ allowNull: false, type: DataType.STRING })
    backdrop_path: string = "";

    @Column({ allowNull: false, type: DataType.INTEGER })
    genre_ids: number = 0;

    @Column({ allowNull: false, type: DataType.STRING })
    original_language: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    original_title: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    overview: string = "";

    @Column({ allowNull: false, type: DataType.INTEGER })
    popularity: number = 0;

    @Column({ allowNull: false, type: DataType.STRING })
    poster_path: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    release_date: string = "";

    @Column({ allowNull: false, type: DataType.STRING })
    title: string = "";

    @Column({ allowNull: false, type: DataType.BOOLEAN })
    video: boolean = false;

    @Column({ allowNull: false, type: DataType.INTEGER })
    vote_average: number = 0;

    @Column({ allowNull: false, type: DataType.INTEGER })
    vote_count: number = 0;
}
