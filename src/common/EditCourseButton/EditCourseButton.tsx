import React from 'react';
import editIcon from '../../assets/editIcon.svg';
import styles from './EditCourseButton.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const EditCourseButton: React.FC<ButtonProps> = ({ ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			<img src={editIcon} alt='delete-button' />
		</button>
	);
};
export default EditCourseButton;
