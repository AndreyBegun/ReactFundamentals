import React from 'react';
import editIcon from '../../assets/editIcon.svg';
import styles from './EditCourseButton.module.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	id: string;
}

const EditCourseButton: React.FC<ButtonProps> = ({ id, ...rest }) => {
	const handleEditCours = () => alert('edit course');
	return (
		<button className={styles.button} onClick={handleEditCours} {...rest}>
			<img src={editIcon} alt='delete-button' />
		</button>
	);
};
export default EditCourseButton;
