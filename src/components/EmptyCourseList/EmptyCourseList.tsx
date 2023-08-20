import React, { useEffect, useState } from 'react';
import styles from './EmptyCoursList.module.css';
import Button from 'src/common/Button/Button';
import {
	BTN_EMPTY_LIST,
	EMPTY_LIST,
	EMPTY_LIST_DESCRIPTION,
} from 'src/constants';
import { Link } from 'react-router-dom';
import useGetUser from 'src/helpers/useGetUser';

const EmptyCourseList: React.FC = () => {
	// 	const token = localStorage.getItem('token');
	// const [user, setUser] = useState(null);
	const user = useGetUser();
	const isAdmin = (user) => user?.role === 'admin';

	// useEffect(() => {
	// 	if (token) {
	// 		// Fetch user information using the token
	// 		fetch('http://localhost:4000/users/me', {
	// 			method: 'GET',
	// 			headers: {
	// 				Authorization: token,
	// 			},
	// 		})
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				setUser(data.result); // Set user information in state
	// 			})
	// 			.catch((error) => {
	// 				console.error('Error fetching user:', error);
	// 			});
	// 	}
	// }, [token]);

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
