import { date } from '../date';
import { skillCategory } from '../skillCategory';

export type project = {
    title: string;
    description: string;
    date?: date;
    role: string;
    icon?: string;
    link?: string;
    skills: skillCategory[];
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
