import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.entity';
// import { Project } from './project/models/project.entity';
// import { ProjectModule } from './project/project.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
			port: 3306,
			username: 'vlnrqiuybsddad4f',
			password: 'ks7ctg67ci3pyv6u',
			database: 'dhz1yqlqb67lgsjd',
			entities: [ User ],
			synchronize: true
		}),
		UserModule,
		AuthModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
