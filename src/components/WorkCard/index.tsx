import React from 'react';
import Image from 'next/image';
import { WorkCardProps } from '../../interfaces/works';
import { skillCategory } from '../../interfaces/skillCategory';
import styles from './styles.module.scss';

const WorkCard = ({ work }: WorkCardProps) => {
	const { date, location, type, title, description, icon, link, jobTitle, skills, bulletPoints } = work;
	return (
		<div className={styles.workCard}>
			<div className={styles.top}>
				<header className={styles.header}>
					<span className={styles.date}>{`${date.start} - ${date.finish}`}</span>
					<span className={styles.location}>{`${location ? `${location} - ` : ''}${type}`}</span>
				</header>
				<h5 className={styles.title}>{title}</h5>
				<h6 className={styles.description}>{description}</h6>
				{link ? (
					<div className={styles.linkWrapper}>
						{icon && (
							<div className={styles.linkIcon}>
								<Image src={icon} width={20} height={20} alt={title} />
							</div>
						)}
						<a className={styles.linkUrl} href={link} target='_blank' rel='noreferrer'>
							{link}
						</a>
					</div>
				) : null}
			</div>
			<div className={styles.bottom}>
				<h5 className={styles.jobTitle}>{jobTitle}</h5>
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
									{category.items.map((skill: string, index: number) => (
										<li className={styles.hardSkill} key={index}>
											{skill}
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

export default WorkCard;
