import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import styles from './Registration.module.css';
import {
	BTN_LOGIN,
	EMAIL,
	LOGIN,
	LOGIN_TEXT,
	NAME,
	PASSWORD,
	REGISTRATION,
} from 'src/constants';

interface FormData {
	name: string;
	email: string;
	password: string;
}

const Registration = () => {
	const navigate = useNavigate();
	const [formValue, setfFormValue] = useState<FormData>({
		[NAME]: '',
		[EMAIL]: '',
		[PASSWORD]: '',
	});
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setfFormValue((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = {};
		if (!formValue[NAME]) {
			validationErrors[NAME] = `${NAME} is required`;
		}
		if (!formValue[EMAIL]) {
			validationErrors[EMAIL] = `${EMAIL} is required`;
		}
		if (!formValue[PASSWORD]) {
			validationErrors[PASSWORD] = `${PASSWORD} is required`;
		}
		setFormErrors(validationErrors);

		// registration user request
		if (Object.keys(validationErrors).length === 0) {
			try {
				const response = await fetch('http://localhost:4000/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formValue),
				});

				if (response.ok) {
					setSuccessMessage(
						'Registration successful! Redirecting to login page...'
					);
					setTimeout(() => {
						// redirect on login page after 2 seconds
						navigate('/login');
					}, 2000);
				} else {
					const responseData = await response.json();
					setFormErrors({ server: responseData.errors });
				}
			} catch (error) {
				console.error('An error occurred:', error);
			}
		}
	};

	return (
		<div className={styles.block}>
			<h3 className={styles.title}>{REGISTRATION}</h3>
			{successMessage && <p>{successMessage}</p>}
			{formErrors?.server && (
				<p className={styles.serverError}>{formErrors?.server}</p>
			)}
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					label={NAME}
					name={NAME}
					type='text'
					value={formValue.name}
					onChange={handleChange}
					error={formErrors[NAME]}
				/>
				<Input
					label={EMAIL}
					name={EMAIL}
					type='email'
					value={formValue.email}
					onChange={handleChange}
					error={formErrors[EMAIL]}
				/>
				<Input
					label={PASSWORD}
					name={PASSWORD}
					type='password'
					value={formValue.password}
					onChange={handleChange}
					error={formErrors[PASSWORD]}
				/>
				<Button buttonText={BTN_LOGIN} type='submit' />
				<div className={styles.footer}>
					{LOGIN_TEXT}
					<Link to='/login'>{LOGIN}</Link>
				</div>
			</form>
		</div>
	);
};

export default Registration;
