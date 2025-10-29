import { date } from '../date';
import { skillCategory } from '../skillCategory';

export type work = {
	title: string;
	description: string;
	date: date;
	location: string;
	type: string;
	jobTitle: string;
	icon?: string;
	link?: string;
	skills: skillCategory[];
	bulletPoints?: string[];
}

export interface works {
	items: work[];
}

export interface WorksProps {
	works: works;
}

export interface WorkCardProps {
	work: work;
}
