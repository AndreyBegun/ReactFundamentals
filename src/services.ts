import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveCoursesAction } from './store/courses/actions';
import { saveUserDataAction } from './store/user/actions';
import { saveAuthorsAction } from './store/authors/actions';

export function useGetCourses() {
	const token = localStorage.getItem('token');
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('http://localhost:4000/courses/all', {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(saveCoursesAction(data.result)); // Set user information in store
			})
			.catch((error) => {
				console.error('Error fetching user:', error);
			});
		// }
	}, []);
}

export function useGetAuthors() {
	const token = localStorage.getItem('token');
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('http://localhost:4000/authors/all', {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(saveAuthorsAction(data.result)); // Set user information in store
			})
			.catch((error) => {
				console.error('Error fetching user:', error);
			});
		// }
	}, []);
}

export function useGetUser() {
	const token = localStorage.getItem('token');
	const dispatch = useDispatch();

	useEffect(() => {
		if (token) {
			// Fetch user information using the token
			fetch('http://localhost:4000/users/me', {
				method: 'GET',
				headers: {
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					// save userData to redux state
					dispatch(saveUserDataAction(data?.result));
				})
				.catch((error) => {
					console.error('Error fetching user:', error);
				});
		}
	}, [token]);
}
