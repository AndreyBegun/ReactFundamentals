import { UserType, userActionTypes } from './types';

type SaveUserAction = {
	type: userActionTypes.SAVE_USER;
	payload: UserType;
};
type DeleteUserAction = {
	type: userActionTypes.DELETE_USER;
};

export const saveUserDataAction = (userData: UserType): SaveUserAction => ({
	type: userActionTypes.SAVE_USER,
	payload: userData,
});
export const deleteUserDataAction = (): DeleteUserAction => ({
	type: userActionTypes.DELETE_USER,
});
