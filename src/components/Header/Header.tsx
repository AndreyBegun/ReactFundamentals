import Button from 'src/common/Button/Button';
import Logo from './components/Logo/Logo';
import React from 'react';
import styles from './Header.module.css';
import { BTN_LOGIN, BTN_LOGOUT } from 'src/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';
import { deleteUserDataAction } from 'src/store/user/actions';
import { useGetUser } from 'src/services';

export const Header: React.FC = () => {
	const token = localStorage.getItem('token');
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state?.user);
	useGetUser();

	const ifNotLoginPage =
		location.pathname !== '/login' && location.pathname !== '/registration';

	const handleLogout = () => {
		localStorage.removeItem('token'); // Remove token from localStorage
		dispatch(deleteUserDataAction());
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
