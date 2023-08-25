import { configureStore } from '@reduxjs/toolkit';
import { CourseType } from './courses/types';
import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';
import { UserType } from './user/types';

export interface RootState {
	courses: CourseType[];
	user: UserType;
}

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		// authors: authorsReducer,
		user: userReducer,
	},
});
