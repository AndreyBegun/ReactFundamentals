import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses } from 'src/services';

export const getCoursesThunk = createAsyncThunk(
	'courses/CoursesList',
	async (thunkAPI) => {
		const courses = await getCourses();
		return courses;
	}
);
