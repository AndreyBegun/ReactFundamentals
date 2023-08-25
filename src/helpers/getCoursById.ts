import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CourseInfoProps } from 'src/components/CourseInfo/CourseInfo';
import { RootState } from 'src/store/rootReducer';

const useGetCourseById = (id) => {
	const coursesList = useSelector((state: RootState) => state?.courses);
	const [courseInfo, setCourseInfo] = useState(({} as CourseInfoProps) || null);

	useEffect(() => {
		const course = coursesList.find((course) => course.id === id);
		setCourseInfo(course);
	}, [id]);

	return courseInfo;
};
export default useGetCourseById;
