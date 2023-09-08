import { configureStore } from '@reduxjs/toolkit';
import { CourseType } from './courses/types';
import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';
import { UserType } from './user/types';
import authorsReducer from './authors/reducer';
import { AuthorType } from './authors/types';

export interface RootState {
	courses: CourseType[];
	user: UserType;
	authors: AuthorType[];
}

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		authors: authorsReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
