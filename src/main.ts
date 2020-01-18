import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
//const cors = require('cors');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
//  app.use(cors);
  await app.listen(3000);
}
bootstrap();
