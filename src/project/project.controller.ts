import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProjectService } from './project.service';
import { Project } from './models/project.entity';
import { from } from 'rxjs';

@Crud({
	model: {
		type: Project
	},
	query: {
		join: {
			owner: {},
			projectcontributors: {}
		}
	}
})
@Controller('project')
export class ProjectController {
	constructor(public service: ProjectService) {}
}
