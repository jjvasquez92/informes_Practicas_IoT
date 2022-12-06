import { Animal } from '../models/animal.model';

export interface AnimalService {
  
  
  /**
    * Retorna la lista de animales registrados
    */
   list(): Animal[];

   /**
    * Crea un nuevo animal
    * @param animal datos del nuevo animal
    * @return Nuevo animal
    */
   create(animal: Animal): Animal;

   /**
    * Actualiza datos del personaje
    * @param id Identificador único del animal
    * @param animal datos del animal
    * @return animal modificado
    */
   update(id: number, animal: Animal): Animal

   /**
    * Eliminar un animal
    * @param id Identificador único del animal
    * @return True si eliminó al animal
    */
   delete(id: number): boolean

   /**
    * Cambia la edad de un animal
    * @param id Identificador único del animal
    * @param edad nuevo valor de edad 
    */
   updateAge(id: number, edad: number): Animal

    
}
