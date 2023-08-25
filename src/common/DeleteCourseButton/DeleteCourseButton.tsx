import React from 'react';
import deleteIcon from '../../assets/deleteIcon.svg';
import styles from './DeleteButton.module.css';
import { useDispatch } from 'react-redux';
import { deleteCourseAction } from 'src/store/courses/actions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	id: string;
}

const DeleteCourseButton: React.FC<ButtonProps> = ({ id, ...rest }) => {
	const dispatch = useDispatch();
	const handleDeleteCours = () => dispatch(deleteCourseAction(id));
	return (
		<button className={styles.button} onClick={handleDeleteCours} {...rest}>
			<img src={deleteIcon} alt='delete-button' />
		</button>
	);
};
export default DeleteCourseButton;
