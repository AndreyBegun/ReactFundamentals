import './App.css';
import React from 'react';

import { useGetCourses } from './services';
import { useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCours from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { RootState } from './store/rootReducer';

function App() {
	// Check if token exists in localStorage
	const token = localStorage.getItem('token');

	useGetCourses();

	// const courses = [];
	const courses = useSelector((state: RootState) => state?.courses);
	return (
		<>
			<Header />
			<Routes>
				{token && (
					<Route
						path='/courses'
						element={
							!courses || !courses.length ? (
								<EmptyCourseList />
							) : (
								<Courses coursesList={courses} />
							)
						}
					/>
				)}
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCours />} />

				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />

				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</>
	);
}

export default App;
