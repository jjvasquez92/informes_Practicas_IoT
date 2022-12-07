import { Animal } from '../models/animal.model';
export interface AnimalService {
    list(): Animal[];
    create(animal: Animal): Animal;
    update(id: number, animal: Animal): Animal;
    delete(id: number): boolean;
    updateAge(id: number, edad: number): Animal;
}
