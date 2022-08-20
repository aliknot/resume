import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface BoxProps {
	children: ReactNode;
	isClickable?: boolean;
}

const Box = ({ children, isClickable }: BoxProps) => {
	return <div className={`${styles.box}${isClickable ? ` ${styles.clickable}` : ''}`}>{children}</div>;
};

export default Box;
