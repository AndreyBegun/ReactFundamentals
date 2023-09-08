import { useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';

export function useIsAdmin() {
	const user = useSelector((state: RootState) => state?.user?.role);
	const isAdmin = user === 'admin';
	return isAdmin;
}
