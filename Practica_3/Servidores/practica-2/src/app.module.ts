import { Module } from '@nestjs/common';
import { AnimalControllerImpl } from './animal/adapters/controllers/animalImpl.controller';
import { animalServiceImpl } from './animal/domain/services/animalImpl.service';


@Module({
  imports: [],
  controllers: [AnimalControllerImpl],
  providers: [{
    provide: 'animalService',
    useClass: animalServiceImpl
  }],
})
export class AppModule {}
