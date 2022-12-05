import { Personaje } from "src/personaje/domain/models/personaje.model";

export interface PersonajeController{
  /**
    *  Retorna la lista de los Personajes
    */
   listPersonajes();

   /**
    * Crea un Personaje
    * @param datos Objeto con datos de Personaje
    */
   create(datos: Personaje);

   /**
    * Modifica datos de un Personaje
    * @param datos Objeto con datos del Personaje
    * @param id Identificador único del Personaje
    */
   update(datos: Personaje, id: number);

   /**
    * Elimina un Personaje
    * @param id Identificador único del Personaje
    */
   delete(id: number);

   /**
    * Cambia la edad de un Personaje
    * @param id Identificador único del Personaje
    * @param edad Edad del Personaje
    */
   updateAge(id: number, edad: number);
}
