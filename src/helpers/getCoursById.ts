import { mockedCoursesList } from '../constants';

export const getCourseById = (id) =>
	mockedCoursesList.find((course) => course.id === id);
