import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface AboutImageProps {
	image: string;
}

const AboutImage = ({ image }: AboutImageProps) => {
	return (
		<div className={styles.container}>
			<Image src={image} width={535} height={600} alt='about image' />
		</div>
	);
};

export default AboutImage;
