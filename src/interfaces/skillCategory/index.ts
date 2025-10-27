export type skillItem = {
    title: string;
    icon?: string;
}

export type skillCategory = {
    title: string;
    items: skillItem[];
}

export interface SkillCategoryProps {
    skills: skillCategory[];
}
