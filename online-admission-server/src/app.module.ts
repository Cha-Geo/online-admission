import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdmissionModule } from './admission/admission.module';
import { ApplicantsModule } from './applicants/applicants.module';
import { ProgrammesModule } from './programmes/programmes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
import * as cookieParser from 'cookie-parser';
import { User } from './applicants/entities/applicant.entity';
import { Profile } from './applicants/entities/applicant.profile.enity';
import { AuthMiddleware } from './shared/middlewares/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT as unknown as number,
      autoLoadEntities: true,
      // url: process.env.DATABASE_URL,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Profile],
      synchronize: true,
    }),
    AdmissionModule,
    ApplicantsModule,
    ProgrammesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser(), AuthMiddleware).forRoutes('*');
  }
}
