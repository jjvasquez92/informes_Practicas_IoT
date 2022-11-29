import { AppService } from './app.service';
interface Animal {
    nombre: string;
    especie: string;
    edad: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private animales;
    getHello(): Animal[];
    crear(datos: Animal): Animal;
    modificar(datos: Animal, id: number): Animal | string;
    eliminar(id: number): boolean;
    modificarEdad(id: number, edad: number): Animal | string;
}
export {};
