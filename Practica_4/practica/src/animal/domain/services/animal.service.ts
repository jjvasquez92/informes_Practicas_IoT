import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/animal.entity';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { Animal } from '../models/animal.model';

export interface AnimalService {
  
  /**
    * Retorna la lista de animales registrados
    */
   list(): Promise<AnimalEntity[]>;

   /**
    * Crea un nuevo animal
    * @param animal datos del nuevo animal
    * @return Nuevo animal
    */
   create(animal: AnimalEntity): Promise<InsertResult>;

   /**
    * Actualiza datos del personaje
    * @param id Identificador único del animal
    * @param animal datos del animal
    * @return animal modificado
    */
   update(id: number, animal: AnimalEntity): Promise<UpdateResult>

   /**
    * Eliminar un animal
    * @param id Identificador único del animal
    * @return True si eliminó al animal
    */
   delete(id: number): Promise<boolean>

   /**
    * Cambia la edad de un animal
    * @param id Identificador único del animal
    * @param edad nuevo valor de edad 
    */
   updateAge(id: number, age: number): Promise<UpdateResult>

    
}
