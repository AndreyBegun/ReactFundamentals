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

export const Header: React.FC = () => {
	const token = localStorage.getItem('token');
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state?.user);
	useEffect(() => {
		token && store.dispatch(getUserThunk());
	}, [token]);

	const ifNotLoginPage =
		location.pathname !== '/login' && location.pathname !== '/registration';

	const handleLogout = () => {
		localStorage.removeItem('token'); // Remove token from localStorage
		dispatch(dellUser()); // Remove user data from stor
		// TODO:
		// dispatch(dellCourses());
		// dispatch(dellAuthors());

		navigate('/login'); // Navigate to /login page
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
