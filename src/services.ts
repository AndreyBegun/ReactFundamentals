import { API_URL } from './constants';
import { CoursAddFormData } from './store/courses/types';

// User service
export async function login(formValue) {
	return fetch(`${API_URL}/login`, {
		method: 'POST',
		body: JSON.stringify(formValue),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
export async function logout() {
	const token = localStorage.getItem('token');
	return fetch(`${API_URL}/logout`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	});
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

// Courses service
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
export async function addCourse(formValue: CoursAddFormData) {
	const token = localStorage.getItem('token');
	let course = null;
	await fetch(`${API_URL}/courses/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
		body: JSON.stringify(formValue),
	})
		.then((response) => response.json())
		.then((data) => {
			course = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return course;
}
export async function dellCourse(courseId: string) {
	const token = localStorage.getItem('token');
	let course = null;
	await fetch(`${API_URL}/courses/${courseId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			course = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return course;
}
export async function updateCourse(
	formValue: CoursAddFormData,
	courseId: string
) {
	const token = localStorage.getItem('token');
	let course = null;
	await fetch(`${API_URL}/courses/${courseId}`, {
		method: 'PUT',
		body: JSON.stringify(formValue),
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			course = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return course;
}

// Authors service
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
export async function addAuthor(name: string) {
	const token = localStorage.getItem('token');
	let author = null;
	await fetch(`${API_URL}/authors/add`, {
		method: 'POST',
		body: JSON.stringify({ name: name }),
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			author = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return author;
}
export async function delAuthor(id: string) {
	const token = localStorage.getItem('token');
	let author = null;
	await fetch(`${API_URL}/authors/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			author = data.result;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
		});
	return author;
}
