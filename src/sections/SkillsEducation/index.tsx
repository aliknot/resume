import React from 'react';
import { degree } from '../../interfaces/education';
import EducationCard from '../../components/EducationCard';
import { SkillCategory } from '../../interfaces/skills';
import { SkillsEducationProps } from '../../interfaces/skillEducation';
import Box from '../../core/Box';
import styles from './style.module.scss';

const SkillsEducation = ({ skills, education }: SkillsEducationProps) => {
	return (
		<section className={styles.whiteSection} id='skills_education'>
			<div className={styles.wrapper}>
				<div className={styles.skillsAndEducationContainer}>
					<section className={styles.skills}>
						<h3 className={styles.myWorkTitle}>
							Skills
						</h3>
						{skills.map((skillCategory: SkillCategory, categoryIndex: number) => (
							<section key={categoryIndex} className={styles.skillCategory}>
								<h4 className={styles.skillsTitle}>{skillCategory.title}</h4>
								{skillCategory.items.length ? (
									<div className={styles.boxes}>
										{skillCategory.items.map((skill: string, index: number) => (
											<Box key={index}>
												<div className={styles.box}>
													<span>{skill}</span>
												</div>
											</Box>
										))}
									</div>
								) : null}
							</section>
						))}
					</section>
					<section className={styles.education}>
						<h3 className={styles.myWorkTitle}>
							Education
						</h3>
						{education.items.length
							? education.items.map((degree: degree, index: number) => <EducationCard key={index} degree={degree} />)
							: null}
					</section>
				</div>
			</div>
		</section>
	);
};

export default SkillsEducation;
