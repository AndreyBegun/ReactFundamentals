import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveCoursesAction } from './store/courses/actions';
import { saveUserDataAction } from './store/user/actions';

const token = localStorage.getItem('token');

export function useGetCourses() {
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

export function useGetUser() {
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
