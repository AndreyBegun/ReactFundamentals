import React, { ChangeEvent, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { getAuthors } from 'src/helpers/getAuthors';
import Button from 'src/common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import { BTN_ADD_COURSE } from 'src/constants';
import getCourseDuration from 'src/helpers/getCourseDuration';

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
	onShowCourse: (id: string) => void;
}
const Courses: React.FC<CoursesProps> = ({ coursesList, onShowCourse }) => {
	const [courses, setCourses] = useState(coursesList);
	const [searchInputText, setSearchInputText] = useState('');

	const onSearchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchInputText(e.target.value);

	const onSerchHandler = () => {
		let serchRes;
		if (searchInputText.length == 0) {
			serchRes = coursesList;
		} else {
			serchRes = coursesList.filter(
				(course) =>
					course.title
						.toLocaleLowerCase()
						.includes(searchInputText.toLocaleLowerCase()) ||
					course.id
						.toLocaleLowerCase()
						.includes(searchInputText.toLocaleLowerCase())
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
				<Button
					buttonText={BTN_ADD_COURSE}
					onClick={() => alert(BTN_ADD_COURSE)}
				/>
			</div>
			<ul>
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						title={course.title}
						description={course.description}
						authors={getAuthors(course.authors)}
						duration={course.duration}
						creationDate={course.creationDate}
						onShowCourse={() => onShowCourse(course.id)}
					/>
				))}
			</ul>
		</>
	);
};

export default Courses;
