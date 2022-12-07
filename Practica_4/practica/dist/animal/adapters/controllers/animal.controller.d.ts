import { Animal } from "src/animal/domain/models/animal.model";
export interface AnimalController {
    listAnimales(): any;
    create(datos: Animal): any;
    update(datos: Animal, id: number): any;
    delete(id: number): any;
    updateAge(id: number, edad: number): any;
}
