import React from 'react';
import Box from '../../core/Box';
import { about } from '../../interfaces/about';
import styles from './styles.module.scss';

interface AboutDetailsProps {
	about: about;
}

const AboutDetails = ({ about }: AboutDetailsProps) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.headingTitle}>
				<span className={styles.black}>{"I'm"}</span> {about.firstname}
				<br />
				{about.lastname}
			</h1>
			<h2 className={styles.headingSubTitle}>{about.jobTitle}</h2>
			<pre className={styles.description}>{about.description}</pre>
			<div className={styles.boxes}>
				{about.socialLinks.map((socialLink, index: number) => (
					<Box key={index} isClickable={!!socialLink.link}>
						{socialLink.link ? (
							<a href={socialLink.link}>
								<i className={`${styles.boxIcon} icon-${socialLink.icon}`}></i>
								{socialLink.value}
							</a>
						) : (
							<>
								<i className={`${styles.boxIcon} icon-${socialLink.icon}`}></i>
								{socialLink.value}
							</>
						)}
					</Box>
				))}
			</div>
		</div>
	);
};

export default AboutDetails;
