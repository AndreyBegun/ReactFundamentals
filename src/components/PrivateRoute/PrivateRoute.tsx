import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsAdmin } from 'src/helpers/isAdmin';

function PrivateRoute({ children }) {
	const navigate = useNavigate();
	const isAdmin = useIsAdmin();

	useEffect(() => {
		!isAdmin && navigate('/courses');
	}, [isAdmin]);

	return isAdmin && children;
}
export default PrivateRoute;
