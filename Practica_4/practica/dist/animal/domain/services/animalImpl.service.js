"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalServiceImpl = void 0;
const common_1 = require("@nestjs/common");
let animalServiceImpl = class animalServiceImpl {
    constructor() {
        this.animales = [{
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
        ];
    }
    list() {
        return this.animales;
    }
    create(animal) {
        this.animales.push(animal);
        return animal;
    }
    update(id, animal) {
        this.animales[id] = animal;
        return this.animales[id];
    }
    delete(id) {
        const cantidadAnimales = this.animales.length;
        this.animales.splice(id, 1);
        if (cantidadAnimales == this.animales.length) {
            return false;
        }
        else {
            return true;
        }
    }
    updateAge(id, edad) {
        this.animales[id].edad = edad;
        return this.animales[id];
    }
};
animalServiceImpl = __decorate([
    (0, common_1.Injectable)()
], animalServiceImpl);
exports.animalServiceImpl = animalServiceImpl;
//# sourceMappingURL=animalImpl.service.js.map