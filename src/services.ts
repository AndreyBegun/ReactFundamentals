import { API_URL } from './constants';

export async function login(formValue) {
	return fetch(`${API_URL}/login`, {
		method: 'POST',
		body: JSON.stringify(formValue),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export async function getCourses() {
	let courses = null;
	await fetch(`${API_URL}/courses/all`, {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => {
			courses = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return courses;
}

export async function getAuthors() {
	let authors = null;
	await fetch(`${API_URL}/authors/all`, {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => {
			authors = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return authors;
}

export async function getUser() {
	const token = localStorage.getItem('token');
	let user = null;
	// Fetch user information using the token
	await fetch(`${API_URL}/users/me`, {
		method: 'GET',
		headers: {
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			user = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return user;
}
