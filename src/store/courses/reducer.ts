import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from './types';
import {
	addCourseThunk,
	dellCourseThunk,
	getCoursesThunk,
	updateCourseThunk,
} from './thunk';

const initCoursesState = [] as CourseType[];

const coursesReducer = createSlice({
	name: 'courses',
	initialState: initCoursesState,
	reducers: {
		dellCourses: () => {
			return initCoursesState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCoursesThunk.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(addCourseThunk.fulfilled, (state, action) => {
			return [...state, action.payload];
		});
		builder.addCase(dellCourseThunk.fulfilled, (state, action) => {
			return state.filter((course) => course.id !== action.meta.arg);
		});
		builder.addCase(updateCourseThunk.fulfilled, (state, action) => {
			return state.map((course) => {
				if (course.id === action.meta.arg.id) {
					return {
						...course,
						...action.payload,
					};
				} else {
					return course;
				}
			});
		});
	},
});
export const { dellCourses } = coursesReducer.actions;
export default coursesReducer.reducer;
