import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Animal {
  nombre: string,
  especie: string,
  edad: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private animales : Animal[] = [{
    nombre: "elefante",
    especie: "mamifero",
    edad: 8
  }]

  @Get()
  getHello(): Animal[] {
    return this.animales;
  }

  @Post()
  crear(@Body() datos: Animal): Animal {
    this.animales.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Animal, @Param('id') id: number): Animal | string {
    try{
    this.animales[id] = datos
    return this.animales[id];
    }
    catch{
      return `No fue posible modificar animal en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.animales = this.animales.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edad: number): Animal | string{
    try{
      this.animales[id].edad = edad;
      return this.animales[id];
    }
    catch{
      return `No fue posible modificar animal en la posición ${id}`
    }
  }
}