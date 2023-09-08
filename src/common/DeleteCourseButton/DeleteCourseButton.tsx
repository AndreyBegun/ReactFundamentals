import React from 'react';
import deleteIcon from '../../assets/deleteIcon.svg';
import styles from './DeleteButton.module.css';
import { dellCourseThunk } from 'src/store/courses/thunk';
import { store } from 'src/store';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	id: string;
}

const DeleteCourseButton: React.FC<ButtonProps> = ({ id, ...rest }) => {
	const handleDeleteCours = () => store.dispatch(dellCourseThunk(id));
	return (
		<button className={styles.button} onClick={handleDeleteCours} {...rest}>
			<img src={deleteIcon} alt='delete-button' />
		</button>
	);
};
export default DeleteCourseButton;
