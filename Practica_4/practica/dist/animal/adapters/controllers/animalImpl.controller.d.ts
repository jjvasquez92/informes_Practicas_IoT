import { Animal } from "src/animal/domain/models/animal.model";
import { AnimalService } from "src/animal/domain/services/animal.service";
import { AnimalController } from "./animal.controller";
export declare class AnimalControllerImpl implements AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    listAnimales(): Animal[] | {
        message: string;
        error: Error;
    };
    create(datos: Animal): Animal | {
        message: string;
        error: Error;
    };
    update(datos: Animal, id: number): Animal | {
        message: string;
        error: Error;
    };
    delete(id: number): boolean | {
        message: string;
        error: Error;
    };
    updateAge(id: number, edad: number): Animal | {
        message: string;
        error: Error;
    };
}
