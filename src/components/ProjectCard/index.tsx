import React from 'react';
import Image from 'next/image';
import { ProjectCardProps } from '../../interfaces/projects';
import { hardSkill } from '../../interfaces/hardSkills';
import styles from './styles.module.scss';

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { date, title, description, icon, link, role, hardSkills } = project;
	return (
		<div className={styles.projectCard}>
			<div className={styles.top}>
				<header className={styles.header}>
					<span className={styles.date}>{`${date.start} - ${date.finish}`}</span>
				</header>
				<h5 className={styles.title}>{title}</h5>
				<h6 className={styles.description}>{description}</h6>
				{link ? (
					<div className={styles.linkWrapper}>
						<Image src={icon} width={20} height={20} alt={title} />
						<a className={styles.linkUrl} href={link} target='_blank' rel='noreferrer'>
							{link}
						</a>
					</div>
				) : null}
			</div>
			<div className={styles.bottom}>
				<h5 className={styles.role}>{role}</h5>
				{hardSkills.length ? (
					<ul className={styles.hardSkills}>
						{hardSkills.map((hardSkill: hardSkill, index: number) => (
							<li className={styles.hardSkill} key={index}>
								{hardSkill.icon && (
									<div className={styles.iconWrapper}>
										<Image src={hardSkill.icon} width={26} height={26} alt={hardSkill.title} />
									</div>
								)}
								<span className={styles.hardSkillTitle}>{hardSkill.title}</span>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default ProjectCard;
