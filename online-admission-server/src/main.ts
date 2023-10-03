import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  // Add cookie parser middleware
  app.use(cookieParser());

  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from any origin
    credentials: true,
  }); // enable CORS globally

  await app.listen(process.env.PORT);
}
bootstrap();
