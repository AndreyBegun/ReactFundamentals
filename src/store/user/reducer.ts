import { UserAction, UserType, userActionTypes } from './types';

const initUserState = {} as UserType;

export function userReducer(state = initUserState, action: UserAction) {
	switch (action.type) {
		case userActionTypes.SAVE_USER:
			return action.payload;
		case userActionTypes.DELETE_USER:
			return {};

		default:
			return state;
	}
}
