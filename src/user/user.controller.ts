import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UserService } from './user.service';
import { User } from './models/user.entity';
import { from } from 'rxjs';

@Crud({
	model: {
		type: User
	},
	query: {
		join: {
			projects: {}
		}
	}
})
@Controller('user')
export class UserController {
	constructor(public service: UserService) {}
}
