import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import styles from '../Registration/Registration.module.css';
import {
	EMAIL,
	LOGIN,
	PASSWORD,
	REGISTRATION,
	REGISTRATION_TEXT,
} from 'src/constants';
import { login } from 'src/services';
import { getUserThunk } from 'src/store/user/thunk';
import { store } from 'src/store/rootReducer';

interface FormData {
	email: string;
	password: string;
}

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Check if token exists in localStorage
		const token = localStorage.getItem('token');

		// If token exists, redirect to the /courses page
		if (token) {
			navigate('/courses');
		}
	}, [navigate]);
	const [formValue, setfFormValue] = useState<FormData>({
		[EMAIL]: '',
		[PASSWORD]: '',
	});
	const [formErrors, setfFormErrors] = useState<{ [key: string]: string }>({});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setfFormValue((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validation
		const validationErrors = {};
		if (!formValue[EMAIL]) {
			validationErrors[EMAIL] = `${EMAIL} is required`;
		}
		if (!formValue[PASSWORD]) {
			validationErrors[PASSWORD] = `${PASSWORD} is required`;
		}
		setfFormErrors(validationErrors);
		if (Object.keys(validationErrors).length === 0) {
			setLoading(true);
			// Login API call
			try {
				const response = await login(formValue);

				if (response.ok) {
					const data = await response.json();
					localStorage.setItem('token', data.result); // Save token to localStorage
					data && store.dispatch(getUserThunk());
					data && navigate('/courses'); // Redirect to Courses page using useNavigate
				} else {
					// Handle API error here
					console.error('Login failed');
				}
			} catch (error) {
				console.error('API request error:', error);
			}

			setLoading(false);
		}
	};

	return (
		<div className={styles.block}>
			<h3 className={styles.title}>{LOGIN}</h3>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					label={EMAIL}
					name={EMAIL}
					value={formValue[EMAIL]}
					onChange={handleChange}
					error={formErrors[EMAIL]}
				/>
				<Input
					label={PASSWORD}
					name={PASSWORD}
					value={formValue[PASSWORD]}
					type='password'
					onChange={handleChange}
					error={formErrors[PASSWORD]}
				/>
				<Button buttonText='login' type='submit' disabled={loading} />
				<div className={styles.footer}>
					{REGISTRATION_TEXT}
					<Link to='/registration'>{REGISTRATION}</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
