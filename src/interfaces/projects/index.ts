import { date } from '../date';
import { hardSkill } from '../hardSkills';

export type project = {
    title: string;
    description: string;
    date: date;
    role: string;
    icon: string;
    link: string;
    hardSkills: hardSkill[];
}

export interface projects {
    title: string;
    items: project[];
}

export interface WorksProps {
    projects: projects;
}

export interface WorkCardProps {
    project: project;
}
