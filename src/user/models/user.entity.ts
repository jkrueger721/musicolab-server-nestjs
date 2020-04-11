import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	OneToMany,
	JoinColumn
} from 'typeorm';
//import { Project } from '../../project/models/project.entity';

@Entity('user')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ nullable: true })
	username: string;

	@Column({ nullable: true })
	password: string;

	@Column({ nullable: true })
	firstname: string;

	@Column({ nullable: true })
	lastname: string;

	// @OneToMany((v) => Project, (project) => project.owner)
	// @JoinColumn()
	// projects: any[];

	@CreateDateColumn() public createdat: Date;
	@UpdateDateColumn() public updatedat: Date;
}
