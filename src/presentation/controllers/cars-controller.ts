import { Router } from "express";
import { Car } from "../../core/domain/car";
import { CarUseCase } from "../../core/usecase/car-usecase";
import { CarRepository } from "../../infra/repositories/car-repository";


export const carsRouter = Router()

const carRepository = new CarRepository()
const carUseCase = new CarUseCase(carRepository)

carsRouter.post('/cars', async (req, res) => {
    const { name, value } = req.body
    const car = new Car(name, value)
    try {
        const savedCar = await carUseCase.save(car);
        res.json(savedCar)
    } catch (error) {
        res.status(500).json({ "exception:": error.message })
    }
})

carsRouter.get('/cars', async (req, res) => {
    try {
        const allCars = await carUseCase.getAll()
        res.json(allCars)
    } catch (error) {
        res.status(500).json({ "exception:": error })
    }
})

carsRouter.delete('/cars/:id', async (req, res) => {
    const id = parseInt(req.params["id"])
    try {
        await carUseCase.delete(id)
        res.json({ "message": "car succesfully deleted'" })
    } catch (error) {
        res.status(500).json({ "exception:": error.message })
    }
})
