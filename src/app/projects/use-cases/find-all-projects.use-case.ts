import { Inject, Injectable } from "@nestjs/common";
import type { IProjectRepository } from "src/app/repositories/project.ropository";


@Injectable()
export class FindAllProjectsUseCase {
    constructor(
        @Inject('IProjectRepository')
        private projectRepo: IProjectRepository
      ) {}

    execute() {
        return this.projectRepo.findAll();
    }
}