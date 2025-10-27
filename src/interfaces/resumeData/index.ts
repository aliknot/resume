import { about } from '../about';
import { projects } from '../projects';
import { works } from '../works';
import { skillCategory } from '../skillCategory';
import { education } from '../education';

export interface ResumeData {
	about: about;
	projects: projects;
	works: works;
	skills: skillCategory[];
	education: education;
}
