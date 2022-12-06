import { Test, TestingModule } from '@nestjs/testing';
import { animalServiceImpl } from '../../domain/services/animalImpl.service';
import { AnimalController } from '../controllers/animal.controller';
import { AnimalControllerImpl } from '../controllers/animalImpl.controller';

describe('AppController', () => {
  let appController: AnimalController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnimalControllerImpl],
      providers: [animalServiceImpl],
    }).compile();
    appController = app.get<AnimalController>(AnimalControllerImpl);
  });
  describe('root', () => {
    it('should return "Hola mundo"', () => {
      expect(appController.listAnimales()).toBe('Hello World!');
    });
  });
});