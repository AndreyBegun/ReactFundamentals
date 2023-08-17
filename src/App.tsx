import './App.css';
import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import { mockedCoursesList } from './constants';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { getCourseById } from './helpers/getCoursById';

function App() {
	const [courseId, setCourseId] = useState(null);
	const showCourseHandler = (id) => {
		return setCourseId(id);
	};
	const backHandler = () => setCourseId(null);
	return (
		<>
			<Header />
			{!mockedCoursesList && !mockedCoursesList.length ? (
				<EmptyCourseList />
			) : courseId ? (
				<CourseInfo {...getCourseById(courseId)} onBtnClick={backHandler} />
			) : (
				<Courses
					coursesList={mockedCoursesList}
					onShowCourse={showCourseHandler}
				/>
			)}
		</>
	);
}

export default App;
