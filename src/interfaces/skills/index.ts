export type Skill = {
	icon?: string;
	title: string;
};

export interface SkillCategory {
	title: string;
	items: Skill[];
}

export type Skills = SkillCategory[];
