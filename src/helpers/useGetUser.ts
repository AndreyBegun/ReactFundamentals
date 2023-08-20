import { useEffect, useState } from 'react';
// type UserData = {
// 	email: string;
// 	id: string;
// 	name: string;
// 	password: string;
// 	role: string;
// };
function useGetUser() {
	const token = localStorage.getItem('token');
	const [user, setUser] = useState({
		email: '',
		id: '',
		name: '',
		password: '',
		role: '',
	});

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
					console.log(data);
					setUser(data.result); // Set user information in state
				})
				.catch((error) => {
					console.error('Error fetching user:', error);
				});
		}
	}, [token]);

	return user;
}

export default useGetUser;
