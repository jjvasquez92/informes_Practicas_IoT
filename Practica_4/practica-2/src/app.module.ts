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

@Module({
  controllers: [AuthController],
  imports: [
     UsersModule,
     PassportModule,
     JwtModule.register({
        secret: jwtSecret,
        signOptions: { expiresIn: '60m' },
     }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard],
  exports: [AuthService],
  })
export class AuthModule {}