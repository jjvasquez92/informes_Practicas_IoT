import { Test, TestingModule } from '@nestjs/testing';
import { personajeServiceImpl } from '../../domain/services/personajeImpl.service';
import { PersonajeController } from '../controllers/personaje.controller';
import { PersonajeControllerImpl } from '../controllers/personajeImpl.controller';

describe('AppController', () => {
  let appController: PersonajeController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonajeControllerImpl],
      providers: [personajeServiceImpl],
    }).compile();
    appController = app.get<PersonajeController>(PersonajeControllerImpl);
  });
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.listPersonajes()).toBe('Hello World!');
    });
  });
});