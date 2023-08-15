import Button from 'src/common/Button/Button';
import Logo from './components/Logo/Logo';
import * as React from 'react';
import styles from './Header.module.css';
import { BTN_LOGIN } from 'src/constants';

export const Header: React.FC = () => (
	<div className={styles.header}>
		<Logo />
		<Button buttonText={BTN_LOGIN} onClick={() => alert(BTN_LOGIN)} />
	</div>
);
