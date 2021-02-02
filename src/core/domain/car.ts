
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {

    constructor(name: string, value: number) {
        this.name = name
        this.value = value
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    value: Number

}

export interface CarRepositoryInterface {
    findAll(): Promise<Car[]>
    create(car: Car): Promise<Car>
    delete(id: number): Promise<void>
}

