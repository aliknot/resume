import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { AboutImageProps } from '../../interfaces/about';

const AboutImage = ({ image }: AboutImageProps) => {
	return (
		<div className={styles.container}>
			<Image 
				src={image} 
				width={535} 
				height={600} 
				alt='about image'
				className={styles.image}
				priority
			/>
		</div>
	);
};

export default AboutImage;
