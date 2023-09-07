import './App.css';
import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseForm from './components/CourseForm/CourseForm';
import { Header } from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { RootState, store } from './store/rootReducer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getAuthorsThunk } from './store/authors/thunk';
import { getCoursesThunk } from './store/courses/thunk';

function App() {
	// Check if token exists in localStorage
	const token = localStorage.getItem('token');
	const { dispatch } = store;
	useEffect(() => {
		token && dispatch(getAuthorsThunk());
		token && dispatch(getCoursesThunk());
	}, [token]);

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
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>

				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />

				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</>
	);
}

export default App;
