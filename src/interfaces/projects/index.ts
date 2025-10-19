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
    bulletPoints?: string[];
}

export interface projects {
    items: project[];
}

export interface ProjectProps {
    projects: projects;
}

export interface ProjectCardProps {
    project: project;
}
