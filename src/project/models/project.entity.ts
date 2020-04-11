import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
	JoinColumn,
	ManyToMany,
	JoinTable
} from 'typeorm';
import { User } from '../../user/models/user.entity';

@Entity('project')
export class Project extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ nullable: true })
	projectname: string;

	@Column({ nullable: true })
	style: string;

	@Column({ nullable: true })
	daw: string;

	@Column({ nullable: true })
	instumments: string;

	@Column({ nullable: true })
	isprivate: boolean;

	@ManyToOne((v) => User, (user) => user.projects)
	@JoinColumn()
	owner: any;

	@ManyToMany((v) => User)
	@JoinTable({ name: 'projectcontributors' })
	projectcontributors: any[];

	@CreateDateColumn() public createdat: Date;
	@UpdateDateColumn() public updatedat: Date;
}
