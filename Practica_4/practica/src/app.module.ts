import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { jwtSecret } from "./auth/constants";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { JwtStrategy } from "./auth/jwt-auth.strategy";
import { LocalStrategy } from "./auth/local.strategy";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalControllerImpl } from "./animal/adapters/controllers/animalImpl.controller";
import { animalServiceImpl } from "./animal/domain/services/animalImpl.service";
import { AnimalEntity } from "./animal.entity";


@Module({
   imports: [
      AuthModule,
      UsersModule,
      TypeOrmModule.forRoot({
         type: 'mongodb',
         url: 'mongodb+srv://jjvasquez:<password>@cluster0.xbyvvk9.mongodb.net/?retryWrites=true&w=majority',
         useNewUrlParser: true,
         useUnifiedTopology: true,
         synchronize: true, // Solo para desarrollo
         logging: true,
         autoLoadEntities: true,
      }),
      TypeOrmModule.forFeature([AnimalEntity])
   ],
   controllers: [AnimalControllerImpl],
   providers: [
      {
         provide: 'AnimalService',
         useClass: animalServiceImpl,
      },
   ],
   })
   export class AuthModule {}

   

