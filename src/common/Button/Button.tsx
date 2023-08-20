import * as React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, ...rest }) => (
	<button className={styles.button} onClick={onClick} {...rest}>
		{buttonText}
	</button>
);
export default Button;
