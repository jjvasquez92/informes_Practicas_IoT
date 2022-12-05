import { Controller, Delete, Get, Inject, Patch, Post, Put } from "@nestjs/common";
import { Personaje } from "src/personaje/domain/models/personaje.model";
import { PersonajeService } from "src/personaje/domain/services/personaje.service";
import { PersonajeController } from "./personaje.controller";

const errReturn = (e: Error, message: string) => {
    return {
      message: message,
      error: e
    }
  }

@Controller()
export class PersonajeControllerImpl implements PersonajeController{
    constructor(@Inject('PersonajeService')private readonly personajeService: PersonajeService){}


    @Get()
    listPersonajes() {
        try{
            return this.personajeService.list();
        }catch(e){
            return errReturn(e,"Error al mostrar los personajes");
        }
    }

    @Post()
    create(datos: Personaje) {
        try{
            return this.personajeService.create(datos);
        }catch(e){
            return errReturn(e,"Error al crear al personaje");
        }
    }

    @Put(":id")
    update(datos: Personaje, id: number) {
        try{
            return this.personajeService.update(id,datos);
        }catch(e){
            return errReturn(e,"Error al modificar al personaje");
        }
    }
    
    @Delete(":id")
    delete(id: number) {
        try{
            return this.personajeService.delete(id);
          }catch(e){
            return errReturn(e,"Error al eliminar al personaje");
          }
    }
    
    @Patch(":id/edad/:edad")
    updateAge(id: number, edad: number) {
        try{
            return this.personajeService.updateAge(id,edad);
          }catch(e){
            return errReturn(e,"Error al modificar la edad del personaje");
          }
    }
    
}