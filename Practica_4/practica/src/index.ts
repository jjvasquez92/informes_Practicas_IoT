import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AuthModule } from './app.module';

const createNestServer = async (expressInstance) => {
const app = await NestFactory.create(
    AuthModule,
   new ExpressAdapter(expressInstance),
);

return app.init();
};

export default createNestServer;