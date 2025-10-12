import Banner from '../../core/Banner';
import ProjectCard from '../../components/ProjectCard';
import React from 'react';
import { ProjectProps, project } from '../../interfaces/projects';
import styles from './style.module.scss';

const Project = ({ projects }: ProjectProps) => {
	return (
		<section className={styles.graySection} id='work'>
			<div className={styles.wrapper}>
				<Banner title='My Projects' />
				<h3 className={styles.workTitle}>
					Some of My Recent <span className={styles.bluePurple}>Projects</span>
				</h3>
				{projects.items.length ? (
					<div className={styles.workCardsWrapper}>
						{projects.items.map((project: project, index: number) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				) : null}
			</div>
		</section>
	);
};

export default Project;
