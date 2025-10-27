import Head from 'next/head';
import type { NextPage } from 'next';
import { resumeData } from '../data/resume-data';
import About from '../sections/About';
import SkillsEducation from '../sections/SkillsEducation';
import Work from '../sections/Work';
import Projects from '../sections/Projects';
import styles from './styles.module.scss';


const Home: NextPage = () => {
	const { about, projects, works, skills, education } = resumeData;

	return (
		<div className={styles.container}>
			<Head>
				<title>Alireza Fazel Resume</title>
				<meta name='description' content='This is a data scientist and software engineer resume' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<About about={about} />
			<Projects projects={projects} />
			<Work works={works} />
			<SkillsEducation education={education} skills={skills} />
		</div>
	);
};

export default Home;
