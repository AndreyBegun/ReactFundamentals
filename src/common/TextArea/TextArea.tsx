import React, { ChangeEvent, FC, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';
import { INPUT_PLACEHOLDER } from 'src/constants';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	label?: string;
	error?: string;
}
const TextArea: FC<TextAreaProps> = (props) => {
	const { label, error } = props;
	return (
		<div>
			{label && (
				<label className={styles.label} htmlFor={label}>
					{label}
				</label>
			)}
			<textarea
				className={styles.input}
				id={label}
				placeholder={INPUT_PLACEHOLDER}
				{...props}
			/>
			{!!error && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default TextArea;
