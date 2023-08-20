import Button from 'src/common/Button/Button';
import Logo from './components/Logo/Logo';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { BTN_LOGIN, BTN_LOGOUT } from 'src/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
	const token = localStorage.getItem('token');
	const location = useLocation();
	const navigate = useNavigate();

	const [user, setUser] = useState(null);

	useEffect(() => {
		if (token) {
			// Fetch user information using the token
			fetch('http://localhost:4000/users/me', {
				method: 'GET',
				headers: {
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setUser(data.result); // Set user information in state
				})
				.catch((error) => {
					console.error('Error fetching user:', error);
				});
		}
	}, [token]);

	const ifNotLoginPage =
		location.pathname !== '/login' && location.pathname !== '/registration';

	const handleLogout = () => {
		localStorage.removeItem('token'); // Remove token from localStorage
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
						{user?.name}
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
