import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Banco de dados
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000
  console.log('PORT -> ',port)
  await app.listen(port);
}
bootstrap();
