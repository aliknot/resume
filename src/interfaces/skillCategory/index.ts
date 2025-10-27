export type skillItem = {
    title: string;
}

export type skillCategory = {
    title: string;
    items: skillItem[];
}

export interface SkillCategoryProps {
    skills: skillCategory[];
}
