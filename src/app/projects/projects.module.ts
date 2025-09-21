import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectsWithUseCaseController } from './projects-with-use-case.controller';
import { ProjectTypeOrmRepository } from '../repositories/project.ropository';
import { FindAllProjectsUseCase } from './use-cases/find-all-projects.use-case';



@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [
    ProjectsService, 
    ProjectTypeOrmRepository,
    FindAllProjectsUseCase
  ],
  controllers: [
    // ProjectsController,
    ProjectsWithUseCaseController
  ],
})
export class ProjectsModule {}
