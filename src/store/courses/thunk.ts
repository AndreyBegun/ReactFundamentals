import { createAsyncThunk } from '@reduxjs/toolkit';
import { addCourse, dellCourse, getCourses, updateCourse } from 'src/services';
import { CoursAddFormData, CoursUpdateFormData } from './types';

export const getCoursesThunk = createAsyncThunk(
	'courses/CoursesList',
	async (thunkAPI) => {
		const courses = await getCourses();
		return courses;
	}
);
export const addCourseThunk = createAsyncThunk(
	'courses/addCourse',
	async (formValue: CoursAddFormData, thunkAPI) => {
		const course = await addCourse(formValue);
		return course;
	}
);
export const updateCourseThunk = createAsyncThunk(
	'courses/updateCourse',
	async (data: CoursUpdateFormData, thunkAPI) => {
		const course = await updateCourse(data.formData, data.id);
		return course;
	}
);
export const dellCourseThunk = createAsyncThunk(
	'courses/dellCourse',
	async (id: string, thunkAPI) => {
		const course = await dellCourse(id);
		return course;
	}
);
