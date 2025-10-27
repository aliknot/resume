import React from 'react';
import Image from 'next/image';
import { ProjectCardProps } from '../../interfaces/projects';
import { skillItem, skillCategory } from '../../interfaces/skillCategory';
import styles from './styles.module.scss';

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { date, title, description, icon, link, role, skills, bulletPoints } = project;
	return (
		<div className={styles.projectCard}>
			<div className={styles.top}>
				{
					date && (
						<header className={styles.header}>
							<span className={styles.date}>{`${date.start} - ${date.finish}`}</span>
						</header>
					)
				}
				<h5 className={styles.title}>{title}</h5>
				<h6 className={styles.description}>{description}</h6>
				{link ? (
					<div className={styles.linkWrapper}>
						{
							icon && (
								<div className={styles.linkIcon}>
									<Image src={icon} width={20} height={20} alt={title} />
								</div>
							)
						}
						<a className={styles.linkUrl} href={link} target='_blank' rel='noreferrer'>
							{link}
						</a>
					</div>
				) : null}
			</div>
			<div className={styles.bottom}>
				<h5 className={styles.role}>{role}</h5>
				{bulletPoints && bulletPoints.length > 0 && (
					<div className={styles.bulletPointsSection}>
						<ul className={styles.bulletPoints}>
							{bulletPoints.map((point: string, index: number) => (
								<li className={styles.bulletPoint} key={index}>
									{point}
								</li>
							))}
						</ul>
					</div>
				)}
				{skills && skills.length > 0 && (
					<div className={styles.skillsSection}>
						<h6 className={styles.skillsTitle}>Skills</h6>
						{skills.map((category: skillCategory, catIndex: number) => (
							<div key={catIndex} className={styles.skillCategory}>
								<h6 className={styles.categoryTitle}>{category.title}</h6>
								<ul className={styles.hardSkills}>
									{category.items.map((skill: skillItem, index: number) => (
										<li className={styles.hardSkill} key={index}>
											{skill.icon && (
												<Image src={skill.icon} width={16} height={16} alt={skill.title} />
											)}
											<span className={styles.hardSkillTitle}>{skill.title}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
