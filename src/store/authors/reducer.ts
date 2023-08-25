import { AuthorsAction, AuthorsActionTypes, AuthorType } from './types';

const initCoursesState = [] as AuthorType[];

export function authorsReducer(
	state = initCoursesState,
	action: AuthorsAction
) {
	switch (action.type) {
		case AuthorsActionTypes.SAVE_AUTHORS:
			return action.payload;
		case AuthorsActionTypes.ADD_AUTHOR:
			return [...state, action.payload];
		default:
			return state;
	}
}
