import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { INPUT_PLACEHOLDER } from 'src/constants';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	error?: string;
}
const Input: FC<InputProps> = (props) => {
	const { label, error } = props;
	return (
		<div>
			{label && (
				<label className={styles.label} htmlFor={label}>
					{label}
				</label>
			)}
			<input
				className={styles.input}
				id={label}
				placeholder={INPUT_PLACEHOLDER}
				{...props}
			/>
			{!!error && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default Input;
