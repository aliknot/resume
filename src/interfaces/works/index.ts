import { date } from '../date';
import { hardSkill } from '../hardSkills';

export type work = {
	title: string;
	description: string;
	date: date;
	location: string;
	type: string;
	jobTitle: string;
	icon: string;
	link: string;
	hardSkills: hardSkill[];
};

export interface works {
	title: string;
	items: work[];
}

export interface WorksProps {
	works: works;
}

export interface WorkCardProps {
	work: work;
}
