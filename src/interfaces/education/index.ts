import { date } from '../date';

type degree = {
	name: string;
	type: string;
	grade: string;
	science: string;
	date: date;
};

export interface education {
	title: string;
	degrees: degree[];
}
