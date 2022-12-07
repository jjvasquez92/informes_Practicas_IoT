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
exports.AnimalControllerImpl = void 0;
const common_1 = require("@nestjs/common");
const animal_model_1 = require("../../domain/models/animal.model");
const passport_1 = require("@nestjs/passport");
const errReturn = (e, message) => {
    return {
        message: message,
        error: e
    };
};
let AnimalControllerImpl = class AnimalControllerImpl {
    constructor(animalService) {
        this.animalService = animalService;
    }
    listAnimales() {
        try {
            return this.animalService.list();
        }
        catch (e) {
            return errReturn(e, "Error al mostrar los animales");
        }
    }
    create(datos) {
        try {
            return this.animalService.create(datos);
        }
        catch (e) {
            return errReturn(e, "Error al crear al animal");
        }
    }
    update(datos, id) {
        try {
            return this.animalService.update(id, datos);
        }
        catch (e) {
            return errReturn(e, "Error al modificar al animal");
        }
    }
    delete(id) {
        try {
            return this.animalService.delete(id);
        }
        catch (e) {
            return errReturn(e, "Error al eliminar al animal");
        }
    }
    updateAge(id, edad) {
        try {
            return this.animalService.updateAge(id, edad);
        }
        catch (e) {
            return errReturn(e, "Error al modificar la edad del animal");
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimalControllerImpl.prototype, "listAnimales", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [animal_model_1.Animal]),
    __metadata("design:returntype", void 0)
], AnimalControllerImpl.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Put)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [animal_model_1.Animal, Number]),
    __metadata("design:returntype", void 0)
], AnimalControllerImpl.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Delete)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnimalControllerImpl.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Patch)(":id/edad/:edad"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AnimalControllerImpl.prototype, "updateAge", null);
AnimalControllerImpl = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('AnimalService')),
    __metadata("design:paramtypes", [Object])
], AnimalControllerImpl);
exports.AnimalControllerImpl = AnimalControllerImpl;
//# sourceMappingURL=animalImpl.controller.js.map