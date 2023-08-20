import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import { mockedCoursesList as list } from './constants';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
	// Check if token exists in localStorage
	const token = localStorage.getItem('token');
	return (
		<>
			<Header />
			<Routes>
				{token && (
					<Route
						path='/courses'
						element={
							!list && !list.length ? (
								<EmptyCourseList />
							) : (
								<Courses coursesList={list} />
							)
						}
					/>
				)}
				<Route path='/courses/:courseId' element={<CourseInfo />} />

				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />

				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</>
	);
}

export default App;
