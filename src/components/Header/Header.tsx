import Button from 'src/common/Button/Button';
import Logo from './components/Logo/Logo';
import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { BTN_LOGIN, BTN_LOGOUT } from 'src/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from 'src/store/rootReducer';
import { getUserThunk } from 'src/store/user/thunk';
import { dellUser } from 'src/store/user/reducer';
import { logout } from 'src/services';
import { dellAuthors } from 'src/store/authors/reducer';
import { dellCourses } from 'src/store/courses/reducer';
import { getAuthorsThunk } from 'src/store/authors/thunk';
import { getCoursesThunk } from 'src/store/courses/thunk';

export const Header: React.FC = () => {
	const token = localStorage.getItem('token');
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state?.user);
	useEffect(() => {
		token && store.dispatch(getUserThunk());
		token && store.dispatch(getAuthorsThunk());
		token && store.dispatch(getCoursesThunk());
	}, [token]);

	const ifNotLoginPage =
		location.pathname !== '/login' && location.pathname !== '/registration';

	const handleLogout = async () => {
		try {
			const res = await logout();
			if (res.ok) {
				localStorage.removeItem('token'); // Remove token from localStorage
				dispatch(dellUser()); // Remove user data from stor
				dispatch(dellCourses()); // Remove Courses data from stor
				dispatch(dellAuthors()); // Remove Authurs data from stor
				navigate('/login'); // Navigate to /login page
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.header}>
			<Link to='/courses'>
				<Logo />
			</Link>
			{ifNotLoginPage &&
				(token ? (
					<span className={styles.logout}>
						{user && user?.name}
						<Button buttonText={BTN_LOGOUT} onClick={handleLogout} />
					</span>
				) : (
					<Link to='/login'>
						<Button buttonText={BTN_LOGIN} />
					</Link>
				))}
		</div>
	);
};
