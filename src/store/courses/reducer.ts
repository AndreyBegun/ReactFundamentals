import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from './types';
import { getCoursesThunk } from './thunk';

const initCoursesState = [] as CourseType[];

const coursesReducer = createSlice({
	name: 'courses',
	initialState: initCoursesState,
	reducers: {
		saveCourse: (state, action: PayloadAction<CourseType>) => {
			return [...state, action.payload];
		},
		deleteCourse: (state, action: PayloadAction<string>) => {
			return state.filter((course) => course.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCoursesThunk.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});
export const { saveCourse, deleteCourse } = coursesReducer.actions;
export default coursesReducer.reducer;

// function coursesReducer(state = initCoursesState, action: CoursesAction) {
// 	switch (action.type) {
// 		case CoursesActionTypes.SAVE_COURSES:
// 			return action.payload;

// 		case CoursesActionTypes.ADD_COURSE:
// 			return [...state, action.payload];

// 		case CoursesActionTypes.DELETE_COURSE:
// 			return state.filter((course) => course.id !== action.payload);

// 		default:
// 			return state;
// 	}
// }
