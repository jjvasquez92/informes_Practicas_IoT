import { Controller, Delete, Get, Inject, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { Animal } from "src/animal/domain/models/animal.model";
import { AnimalService } from "src/animal/domain/services/animal.service";
import { AnimalController } from "./animal.controller";
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
    return {
      message: message,
      error: e
    }
  }

@Controller()
export class AnimalControllerImpl implements AnimalController{
    constructor(@Inject('AnimalService')private readonly animalService: AnimalService){}

    @UseGuards(AuthGuard('local'))
    @Get()
    listAnimales() {
        try{
            return this.animalService.list();
        }catch(e){
            return errReturn(e,"Error al mostrar los animales");
        }
    }

    @UseGuards(AuthGuard('local'))
    @Post()
    create(datos: Animal) {
        try{
            return this.animalService.create(datos);
        }catch(e){
            return errReturn(e,"Error al crear al animal");
        }
    }
    @UseGuards(AuthGuard('local'))
    @Put(":id")
    update(datos: Animal, id: number) {
        try{
            return this.animalService.update(id,datos);
        }catch(e){
            return errReturn(e,"Error al modificar al animal");
        }
    }
    @UseGuards(AuthGuard('local'))
    @Delete(":id")
    delete(id: number) {
        try{
            return this.animalService.delete(id);
          }catch(e){
            return errReturn(e,"Error al eliminar al animal");
          }
    }
    @UseGuards(AuthGuard('local'))
    @Patch(":id/edad/:edad")
    updateAge(id: number, edad: number) {
        try{
            return this.animalService.updateAge(id,edad);
          }catch(e){
            return errReturn(e,"Error al modificar la edad del animal");
          }
    }
    
}