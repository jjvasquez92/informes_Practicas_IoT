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
  },
  {
    nombre: "perro",
    especie: "mamifero",
    edad: 3
  },
  {
    nombre: "gato",
    especie: "mamifero",
    edad: 1
  }
]

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
      if(this.animales.length > id){
        this.animales.splice(id,1);
      return "animal borrado satisfactoriamente";  
      }else{
        return "no existe ningun animal con ese identificador"
      }
    }
    catch{
      return "se presento un problema, validar nuevamente";
    }
  }

  @Patch(":id/edad/:edad")
  modificarEdad(@Param('id') id: number, @Param('edad') edad: number): Animal | string{
    try{
      this.animales[id].edad = edad;
      return this.animales[id];
    }
    catch{
      return `No fue posible modificar animal en la posición ${id}`
    }
  }
}