import React from 'react';
import AboutDetails from '../../components/AboutDetails';
import AboutImage from '../../components/AboutImage';
import styles from './style.module.scss';
import { AboutProps } from '../../interfaces/about';
import Box from '../../core/Box';

const About = ({ about }: AboutProps) => {
	return (
		<section className={styles.whiteSection} id='about'>
			<div className={styles.wrapper}>
				<div className={styles.aboutDetails}>
					<AboutDetails about={about} />
					<AboutImage image={about.image} />
					<div className={`${styles.boxesMobile} ${styles.boxes}`}>
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
			</div>
		</section>
	);
};

export default About;
