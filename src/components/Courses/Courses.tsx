import React, { ChangeEvent, useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { getAuthors } from 'src/helpers/getAuthors';
import Button from 'src/common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import { BTN_ADD_COURSE } from 'src/constants';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store/rootReducer';
import { useSelector } from 'react-redux';

interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

interface CoursesProps {
	coursesList: Course[];
}
const Courses: React.FC<CoursesProps> = ({ coursesList }) => {
	const [courses, setCourses] = useState([]);
	const [searchInputText, setSearchInputText] = useState('');

	const authorsList = useSelector((state: RootState) => state?.authors);

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
				<Link to='/courses/add'>
					<Button buttonText={BTN_ADD_COURSE} />
				</Link>
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
