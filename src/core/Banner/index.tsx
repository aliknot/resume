import styles from './styles.module.scss';

interface BannerProps {
	title: string;
}

const Banner = ({ title }: BannerProps) => {
	return (
		<div className={styles.bannerWrapper}>
			<span className={styles.banner}>{title}</span>
		</div>
	);
};

export default Banner;
