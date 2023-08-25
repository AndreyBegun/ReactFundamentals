import { CourseType, CoursesActionTypes } from './types';

type AddNewCourseAction = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
};
type SaveCoursesAction = {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
};
type DeleteCoursesAction = {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
};

export const addNewCourseAction = (
	courseData: CourseType
): AddNewCourseAction => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

export const saveCoursesAction = (
	coursesData: CourseType[]
): SaveCoursesAction => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: coursesData,
});

export const deleteCourseAction = (id: string): DeleteCoursesAction => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: id,
});
