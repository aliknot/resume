import Banner from '../../core/Banner';
import WorkCard from '../../components/WorkCard';
import React from 'react';
import { WorksProps, work } from '../../interfaces/works';
import styles from './style.module.scss';

const Work = ({ works }: WorksProps) => {
	return (
		<section className={styles.graySection} id='work'>
			<div className={styles.wrapper}>
				<Banner title='My Work' />
				<h3 className={styles.workTitle}>
					Some of My Recent <span className={styles.bluePurple}>Works</span>
				</h3>
				{works.items.length ? (
					<div className={styles.workCardsWrapper}>
						{works.items.map((work: work, index: number) => (
							<WorkCard key={index} work={work} />
						))}
					</div>
				) : null}
			</div>
		</section>
	);
};

export default Work;
