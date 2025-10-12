import Head from 'next/head';
import type { NextPage } from 'next';
import data from '../../public/data.json';
import About from '../sections/About';
import SkillsEducation from '../sections/SkillsEducation';
import Work from '../sections/Work';
import Projects from '../sections/Projects';
import styles from './styles.module.scss';


const Home: NextPage = () => {
	const { about, projects, works, hardSkills, softSkills, education } = data;

	return (
		<div className={styles.container}>
			<Head>
				<title>Alireza Fazel Resume</title>
				<meta name='description' content='This is a frontend developer resume' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<About about={about} />
			<Projects projects={projects} />
			<Work works={works} />
			<SkillsEducation education={education} hardSkills={hardSkills} softSkills={softSkills} />
		</div>
	);
};

export default Home;
