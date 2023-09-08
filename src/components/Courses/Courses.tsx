import React, { ChangeEvent, useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { getAuthors } from 'src/helpers/getAuthors';
import Button from 'src/common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import { BTN_ADD_COURSE } from 'src/constants';
import { Link } from 'react-router-dom';
import { RootState, store } from 'src/store/rootReducer';
import { useSelector } from 'react-redux';
import { useIsAdmin } from 'src/helpers/isAdmin';
import { getAuthorsThunk } from 'src/store/authors/thunk';
import { getCoursesThunk } from 'src/store/courses/thunk';

// interface Course {
// 	id: string;
// 	title: string;
// 	description: string;
// 	creationDate: string;
// 	duration: number;
// 	authors: string[];
// }

const Courses: React.FC = () => {
	const [courses, setCourses] = useState([]);
	const [searchInputText, setSearchInputText] = useState('');

	const coursesList = useSelector((state: RootState) => state?.courses);
	const authorsList = useSelector((state: RootState) => state?.authors);

	const isAdmin = useIsAdmin();

	useEffect(() => {
		setCourses(coursesList);
	}, [coursesList]);

	const onSearchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchInputText(e.target.value);

	const onSerchHandler = () => {
		let serchRes;
		if (searchInputText.length == 0) {
			serchRes = coursesList;
		} else {
			serchRes = coursesList.filter(
				(course) =>
					course.title.toLowerCase().includes(searchInputText.toLowerCase()) ||
					course.id.toLowerCase().includes(searchInputText.toLowerCase())
			);
		}
		return setCourses(serchRes);
	};
	return (
		<>
			<div className={styles.header}>
				<SearchBar
					inputText={searchInputText}
					onInputChange={onSearchInputChangeHandler}
					onSearch={onSerchHandler}
				/>
				{isAdmin && (
					<Link to='/courses/add'>
						<Button buttonText={BTN_ADD_COURSE} />
					</Link>
				)}
			</div>
			<ul>
				{courses?.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						authors={getAuthors(course.authors, authorsList).toString()}
						duration={course.duration}
						creationDate={course.creationDate}
					/>
				))}
			</ul>
		</>
	);
};

export default Courses;
