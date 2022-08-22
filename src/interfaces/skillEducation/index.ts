import { education } from '../education';
import { softSkills } from '../softSkills';
import { hardSkills } from '../hardSkills';

export interface SkillsEducationProps {
	hardSkills: hardSkills;
	softSkills: softSkills;
	education: education;
}
