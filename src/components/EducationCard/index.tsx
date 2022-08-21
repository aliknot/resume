import React from 'react';
import Image from 'next/image';
import { degree } from '../../interfaces/education';
import styles from './styles.module.scss';

interface EducationCardProps {
	degree: degree;
}

const EducationCard = ({ degree }: EducationCardProps) => {
	const { date, grade, name, type, science } = degree;
	return (
		<div className={styles.card}>
			<header className={styles.header}>
				<span className={styles.date}>
					{date.start} - {date.finish}
				</span>
				<span className={styles.grade}>{grade}</span>
			</header>
			<main className={styles.main}>
				<Image src={degree.icon} width={75} height={75} alt={name} />
				<div className={styles.details}>
					<h5 className={styles.name}>{name}</h5>
					<h6 className={styles.type}>{type}</h6>
					<h6 className={styles.science}>{science}</h6>
				</div>
			</main>
		</div>
	);
};

export default EducationCard;
