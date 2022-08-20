import { Url } from 'url';
import { date } from '../date';
import { hardSkills } from '../hardSkills';

export interface work {
	title: string;
	date: date;
	location: string;
	type: 'Freelance' | 'Remote' | 'On Site';
	projectName: string;
	jobTitle: string;
	icon: string;
	link: Url;
	hardSkills: hardSkills;
}
