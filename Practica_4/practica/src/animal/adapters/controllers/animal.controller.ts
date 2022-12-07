import { Animal } from "src/animal/domain/models/animal.model";

export interface AnimalController{
 
   listAnimales();

   
   create(datos: Animal);

   
   update(datos: Animal, id: number);

   
   delete(id: number);

   
   updateAge(id: number, edad: number);
}
