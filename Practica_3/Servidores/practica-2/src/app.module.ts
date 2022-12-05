import { Module } from '@nestjs/common';
import { PersonajeControllerImpl } from './personaje/adapters/controllers/personajeImpl.controller';
import { personajeServiceImpl } from './personaje/domain/services/personajeImpl.service';


@Module({
  imports: [],
  controllers: [PersonajeControllerImpl],
  providers: [{
    provide: 'PersonajeService',
    useClass: personajeServiceImpl
  }],
})
export class AppModule {}
