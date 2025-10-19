import React from 'react';
import Banner from '../../core/Banner';
import { degree } from '../../interfaces/education';
import EducationCard from '../../components/EducationCard';
import { hardSkill } from '../../interfaces/hardSkills';
import Image from 'next/image';
import { SkillsEducationProps } from '../../interfaces/skillEducation';
import Box from '../../core/Box';
import styles from './style.module.scss';

const SkillsEducation = ({ hardSkills, softSkills, education }: SkillsEducationProps) => {
	return (
		<section className={styles.whiteSection} id='skills_education'>
			<div className={styles.wrapper}>
				<Banner title='My skills and Education' />
				<div className={styles.skillsAndEducationContainer}>
					<section className={styles.skills}>
						<h3 className={styles.myWorkTitle}>
							My <span className={styles.bluePurple}>Skills</span>
						</h3>
						<section className={styles.hardSkills}>
							<>
								<h4 className={styles.skillsTitle}>{hardSkills.title}</h4>
								{hardSkills.items.length ? (
									<div className={styles.boxes}>
										{hardSkills.items.map((hardSkill: hardSkill, index: number) => (
											<Box key={index}>
												<div className={styles.box}>
													{hardSkill.icon && (
														<div className={styles.iconWrapper}>
															<Image src={hardSkill.icon} width={26} height={26} alt={hardSkill.title} />
														</div>
													)}
													<span>{hardSkill.title}</span>
												</div>
											</Box>
										))}
									</div>
								) : null}
							</>
						</section>
						<section className={styles.softSkills}>
							<>
								<h4 className={styles.skillsTitle}>{softSkills.title}</h4>
								{softSkills.items.length ? (
									<div className={styles.boxes}>
										{softSkills.items.map((softSkill: string, index: number) => (
											<Box key={index}>
												<div className={styles.box}>
													<span>{softSkill}</span>
												</div>
											</Box>
										))}
									</div>
								) : null}
							</>
						</section>
					</section>
					<section className={styles.education}>
						<h3 className={styles.myWorkTitle}>
							My <span className={styles.bluePurple}>Education</span>
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
