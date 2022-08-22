import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import AboutDetails from '../components/AboutDetails';
import AboutImage from '../components/AboutImage';
import Banner from '../core/Banner';
import data from '../../public/data.json';
import { hardSkill } from '../interfaces/hardSkills';
import Box from '../core/Box';
import EducationCard from '../components/EducationCard';
import { degree } from '../interfaces/education';
import styles from './styles.module.scss';
import WorkCard from '../components/WorkCard';
import { work } from '../interfaces/works';

const Home: NextPage = () => {
	const { about, works, hardSkills, softSkills, education } = data;

	return (
		<div className={styles.container}>
			<Head>
				<title>Alireza Fazel Resume</title>
				<meta name='description' content='This is a frontend developer resume' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className={styles.whiteSection} id='about'>
				<div className={styles.wrapper}>
					<Banner title='About Me' />
					<div className={styles.aboutDetails}>
						<AboutDetails about={about} />
						<AboutImage image={about.image} />
					</div>
				</div>
			</section>

			<section className={styles.graySection} id='work'>
				<div className={styles.wrapper}>
					<Banner title='My Work' />
					<h3 className={styles.workTitle}>
						Some of My Recent <span className={styles.bluePurple}>Works</span>
					</h3>
					<h4 className={styles.workSubtitle}>{works.title}</h4>
					{works.items.length ? (
						<div className={styles.workCardsWrapper}>
							{works.items.map((work: work, index: number) => (
								<WorkCard key={index} work={work} />
							))}
						</div>
					) : null}
				</div>
			</section>

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
														<Image src={hardSkill.icon} alt={hardSkill.title} width={26} height={26} />{' '}
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
							<h4 className={styles.skillsTitle}>{education.title}</h4>
							{education.items.length
								? education.items.map((degree: degree, index: number) => <EducationCard key={index} degree={degree} />)
								: null}
						</section>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
