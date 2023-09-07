import React from 'react';
import styles from './EmptyCoursList.module.css';
import Button from 'src/common/Button/Button';
import {
	BTN_EMPTY_LIST,
	EMPTY_LIST,
	EMPTY_LIST_DESCRIPTION,
} from 'src/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';

type UserData = {
	email?: string;
	id?: string;
	name?: string;
	password?: string;
	role?: string;
};

const EmptyCourseList: React.FC = () => {
	const user = useSelector((state: RootState) => state?.user);
	const isAdmin = (user: UserData) => user?.role === 'admin';

	return (
		<div className={styles.emptyListCard}>
			<p className={styles.emptyListCardTitle}>{EMPTY_LIST}</p>
			<p className={styles.emptyListCardText}>{EMPTY_LIST_DESCRIPTION}</p>
			{isAdmin(user) ? (
				<Link to='/courses/add'>
					<Button buttonText={BTN_EMPTY_LIST} />
				</Link>
			) : (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN
				</p>
			)}
		</div>
	);
};

export default EmptyCourseList;
