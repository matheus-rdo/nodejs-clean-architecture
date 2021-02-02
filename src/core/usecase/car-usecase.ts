import { Car, CarRepositoryInterface } from "../domain/car";

export class CarUseCase {

    repository: CarRepositoryInterface

    constructor(repository: CarRepositoryInterface) {
        this.repository = repository
    }

    async save(car: Car) {
        return this.repository.create(car)
    }

    async getAll() {
        return this.repository.findAll()
    }

    async delete(id: number) {
        return this.repository.delete(id)
    }

}