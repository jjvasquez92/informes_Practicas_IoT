import { Injectable } from "@nestjs/common";
import { Animal } from "../models/animal.model";
import { AnimalService } from "./animal.service";

@Injectable()
export class animalServiceImpl implements AnimalService{
    private animales : Animal[]=[{
        id: 111,
        nombre: "Elefante",
        especie: "mamifero",
        edad: 3,
        descripcion: "Animal grande"
        },
        {
        id: 222,
        nombre: "caballo",
        especie: "mamifero",
        edad: 5,
        descripcion: "animal facil de domesticar"
        },
        {
        id: 333,
        nombre: "loro",
        especie: "ave",
        edad: 4,
        descripcion: "animal de diversos colores"
        }
        ]
      
    list(): Animal[] {
        return this.animales;
    }
    create(animal: Animal): Animal {
        this.animales.push(animal);
        return animal;
    }
    update(id: number, animal: Animal): Animal {
        this.animales[id] = animal;
        return this.animales[id];
    }
    delete(id: number): boolean {
        const cantidadAnimales = this.animales.length;
        this.animales.splice(id,1);
        if(cantidadAnimales == this.animales.length){
            return false;
        }else{
            return true;
        }
        
    }
    updateAge(id: number, edad: number): Animal {
        this.animales[id].edad = edad;
        return this.animales[id];
    } 
}