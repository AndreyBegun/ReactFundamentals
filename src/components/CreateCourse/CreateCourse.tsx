import React, { useState } from 'react';
import styles from './CreateCourse.module.css';
import {
	ADD_AUTHORS,
	ADD_DESCRIPTION,
	ADD_DURATION,
	ADD_TITLE,
	mockedCoursesList,
} from 'src/constants';
import Input from 'src/common/Input/Input';
import TextArea from 'src/common/TextArea/TextArea';
import Button from 'src/common/Button/Button';
import getCourseDuration from 'src/helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';
import AuthorsItem from './components/AuthorItem/AuthorItem';
import { getAuthors } from 'src/helpers/getAuthors';
import generateRandomId from 'src/helpers/generateRandomId';

interface CoursAddFormData {
	title: string;
	description: string;
	duration: number | undefined;
	authors: string[];
}

const CreateCours = () => {
	const navigate = useNavigate();

	const [formValue, setfFormValue] = useState<CoursAddFormData>({
		[ADD_TITLE]: '',
		[ADD_DESCRIPTION]: '',
		[ADD_DURATION]: undefined,
		[ADD_AUTHORS]: [],
	});
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setfFormValue((prevData) => ({ ...prevData, [name]: value }));
	};
	const handleCancel = () => navigate('/courses');
	const handleAddAuthor = (id: string) => {
		const authorsList = formValue[ADD_AUTHORS];
		authorsList.push(id);
		setfFormValue((prevVal) => ({
			...prevVal,
			[ADD_AUTHORS]: authorsList,
		}));
	};
	const handleDeleteAuthor = (id: string) => {
		const authorsList = formValue[ADD_AUTHORS].filter((ell) => ell !== id);
		setfFormValue((prevVal) => ({
			...prevVal,
			[ADD_AUTHORS]: authorsList,
		}));
	};

	function getFormattedDate() {
		const today = new Date();
		const day = String(today.getDate()).padStart(2, '0');
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const year = today.getFullYear();

		return `${day}/${month}/${year}`;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = {};
		if (!formValue[ADD_TITLE]) {
			validationErrors[ADD_TITLE] = `Title is required`;
		}
		if (!formValue[ADD_DESCRIPTION]) {
			validationErrors[ADD_DESCRIPTION] = `Description is required`;
		}
		if (!formValue[ADD_DURATION]) {
			validationErrors[ADD_DURATION] = `Duration is required`;
		}
		if (!formValue[ADD_AUTHORS].length) {
			validationErrors[ADD_AUTHORS] = `Authors is required`;
		}
		setFormErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			mockedCoursesList.push({
				...formValue,
				id: generateRandomId(),
				creationDate: getFormattedDate(),
			});
			navigate('/courses');
		}
		// registration user request
		// if (Object.keys(validationErrors).length === 0) {
		// 	try {
		// 		const response = await fetch('http://localhost:4000//courses/add', {
		// 			method: 'POST',
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			body: JSON.stringify(formValue),
		// 		});

		// 		if (response.ok) {
		// 			setSuccessMessage(
		// 				'Registration successful! Redirecting to login page...'
		// 			);
		// 			setTimeout(() => {
		// 				// redirect on login page after 2 seconds
		// 				navigate('/courses');
		// 			}, 2000);
		// 		} else {
		// 			const responseData = await response.json();
		// 			setFormErrors({ server: responseData.errors });
		// 		}
		// 	} catch (error) {
		// 		console.error('An error occurred:', error);
		// 	}
		// }
	};
	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Course edit/create page</h3>
			<form onSubmit={handleSubmit}>
				<div className={styles.form}>
					<div className={styles.formSection}>
						<h4 className={styles.sectionTitle}>Main Info</h4>
						<Input
							label={ADD_TITLE}
							name={ADD_TITLE}
							value={formValue[ADD_TITLE]}
							onChange={handleChange}
							error={formErrors[ADD_TITLE]}
						/>
						<TextArea
							label={ADD_DESCRIPTION}
							name={ADD_DESCRIPTION}
							value={formValue[ADD_DESCRIPTION]}
							onChange={handleChange}
							error={formErrors[ADD_DESCRIPTION]}
						/>
					</div>

					<div className={styles.formSection}>
						<h4 className={styles.sectionTitle}>Duration</h4>
						<div className={styles.durationSection}>
							<Input
								label={ADD_DURATION}
								name={ADD_DURATION}
								value={formValue[ADD_DURATION]}
								type='number'
								onChange={handleChange}
								error={formErrors[ADD_DURATION]}
							/>
							<span className={styles.duration}>
								{' '}
								{getCourseDuration(formValue.duration)}
							</span>
						</div>
					</div>

					<div className={styles.formSection}>
						<h4 className={styles.sectionTitle}>Authors</h4>

						<div className={styles.sectionAuthors}>
							<AuthorsItem
								onAddAuthor={handleAddAuthor}
								onDeleteAuthor={handleDeleteAuthor}
							/>
							<div className={styles.courseAuthors}>
								<h4 className={styles.sectionTitle}>Course Authors</h4>
								{formValue[ADD_AUTHORS].length ? (
									<>
										{getAuthors(formValue[ADD_AUTHORS]).map((author) => (
											<div>{author}</div>
										))}
									</>
								) : (
									<div>Author list is empty</div>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footer}>
					<Button buttonText='cancel' onClick={handleCancel} />
					<Button buttonText='create course' type='submit' />
				</div>
			</form>
		</div>
	);
};

export default CreateCours;
