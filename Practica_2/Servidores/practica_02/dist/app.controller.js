"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.animales = [{
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
        ];
    }
    getHello() {
        return this.animales;
    }
    crear(datos) {
        this.animales.push(datos);
        return datos;
    }
    modificar(datos, id) {
        try {
            this.animales[id] = datos;
            return this.animales[id];
        }
        catch (_a) {
            return `No fue posible modificar animal en la posición ${id}`;
        }
    }
    eliminar(id) {
        try {
            this.animales = this.animales.filter((val, index) => index != id);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    modificarEdad(id, edad) {
        try {
            this.animales[id].edad = edad;
            return this.animales[id];
        }
        catch (_a) {
            return `No fue posible modificar animal en la posición ${id}`;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Patch)(":id/edad/:edad"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('edad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], AppController.prototype, "modificarEdad", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map