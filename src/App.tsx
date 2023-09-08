import './App.css';
import React from 'react';

import { useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseForm from './components/CourseForm/CourseForm';
import { Header } from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { RootState } from './store/rootReducer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	// Check if token exists in localStorage
	const token = localStorage.getItem('token');

	const courses = useSelector((state: RootState) => state?.courses);

	return (
		<>
			<Header />
			<Routes>
				{token && (
					<Route
						path='/courses'
						element={
							!courses || !courses.length ? <EmptyCourseList /> : <Courses />
						}
					/>
				)}
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>

				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />

				<Route
					path='*'
					element={
						token ? <Navigate to='/courses' /> : <Navigate to='/login' />
					}
				/>
			</Routes>
		</>
	);
}

export default App;
