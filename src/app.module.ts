import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './app/projects/entities/project.entity';
import { ProjectsService } from './app/projects/projects.service';
import { ProjectsModule } from './app/projects/projects.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number (process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      database: process.env.DB_DATABASE || 'leet',
      entities: [Project],
      synchronize: true, // True só ambiente de dev, false só ambiente de produção
      // autoLoadEntities: true, // Carrega entites registradas nos módulos
    }),
    ProjectsModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
