import { date } from '../date';

export type degree = {
	name: string;
	type: string;
	grade: string;
	science: string;
	icon: string;
	date: date;
};

export interface education {
	title: string;
	items: degree[];
}
