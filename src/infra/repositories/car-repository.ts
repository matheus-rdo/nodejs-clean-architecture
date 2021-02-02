
import { getConnection, getManager } from "typeorm";
import { Car, CarRepositoryInterface } from "../../core/domain/car";

export class CarRepository implements CarRepositoryInterface {

    async findAll(): Promise<Car[]> {
        const cars = await getManager().find(Car)
        return cars
    }
    async create(car: Car): Promise<Car> {
        const saved = await getManager().save(car)
        return saved
    }

    async delete(id: number): Promise<void> {
        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Car)
            .where("id = :id", { id })
            .execute()
        if (result.affected == 0) {
            throw new Error('car not found')
        }
    
    }
}