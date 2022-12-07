import { Animal } from "../models/animal.model";
import { AnimalService } from "./animal.service";
export declare class animalServiceImpl implements AnimalService {
    private animales;
    list(): Animal[];
    create(animal: Animal): Animal;
    update(id: number, animal: Animal): Animal;
    delete(id: number): boolean;
    updateAge(id: number, edad: number): Animal;
}
