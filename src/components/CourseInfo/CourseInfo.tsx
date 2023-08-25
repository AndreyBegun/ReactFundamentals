import React from 'react';
import Button from 'src/common/Button/Button';
import styles from './CourseInfo.module.css';
import { getAuthors } from 'src/helpers/getAuthors';
import {
	AUTHORS,
	BTN_BACK,
	CREATED,
	DESCRIPTION,
	DURATION,
	ID,
} from 'src/constants';
import getCourseDuration from 'src/helpers/getCourseDuration';
import useGetCourseById from 'src/helpers/getCoursById';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';

export interface CourseInfoProps {
	id?: string;
	title?: string;
	description?: string;
	authors?: string[];
	duration?: number;
	creationDate?: string;
}

const CourseInfo: React.FC<CourseInfoProps> = () => {
	const { courseId } = useParams();
	const courseInfo = useGetCourseById(courseId);
	const authors = useSelector((state: RootState) => state?.authors);

	return (
		courseInfo && (
			<div className={styles.courseInfo}>
				<div className={styles.title}>{courseInfo?.title}</div>
				<div className={styles.courseCard}>
					<div className={styles.descriptionBlock}>
						<div className={styles.descriptionBlockTitle}>{DESCRIPTION}</div>
						<div>{courseInfo?.description}</div>
					</div>

					<div className={styles.infoBlock}>
						<div className={styles.infoBlockLine}>
							<div className={styles.infoBlockTitle}>{ID}</div>
							<span>{courseInfo?.id}</span>
						</div>
						<div className={styles.infoBlockLine}>
							<span className={styles.infoBlockTitle}>{DURATION}</span>
							<span>{getCourseDuration(courseInfo?.duration)}</span>
						</div>
						<div className={styles.infoBlockLine}>
							<span className={styles.infoBlockTitle}>{CREATED}</span>
							<span>{courseInfo?.creationDate}</span>
						</div>
						<div className={styles.infoBlockLine}>
							<span className={styles.infoBlockTitle}>{AUTHORS}</span>
							<span>
								{getAuthors(courseInfo?.authors, authors)?.toString()}
							</span>
						</div>
					</div>
				</div>
				<div className={styles.buttonWraper}>
					<Link to='/courses'>
						<Button buttonText={BTN_BACK} />
					</Link>
				</div>
			</div>
		)
	);
};

export default CourseInfo;
