import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AnimalEntity } from "src/animal.entity";
import { InsertResult, MongoRepository, UpdateResult } from "typeorm";
import { Animal } from "../models/animal.model";
import { AnimalService } from "./animal.service";

@Injectable()
export class animalServiceImpl implements AnimalService{

   
    constructor( @InjectRepository(AnimalEntity) private repository: MongoRepository<AnimalEntity>,){}
    
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
      
        public async list(): Promise<AnimalEntity[]> {
            return await this.repository.find();
         }
         
         public async create(playerData: AnimalEntity): Promise<InsertResult> {
            const newPlayer = await this.repository.insert(playerData);
            return newPlayer;
         }
         
         public async update(
            id: number,
            playerData: AnimalEntity,
         ): Promise<UpdateResult> {
            const updatedPlayer = await this.repository.update(id, playerData);
            return updatedPlayer;
         }
         
         public async delete(id: number): Promise<boolean> {
            const deleteResult = await this.repository.delete(id);
            return deleteResult.affected > 0;
         }
         
         public async updateAge(id: number, edad: number): Promise<UpdateResult> {
            const updatedPlayer = await this.repository.update(id, { age: edad });
            return updatedPlayer;
         }
}