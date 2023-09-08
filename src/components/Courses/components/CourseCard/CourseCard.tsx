import React from 'react';
import styles from './CourseCard.module.css';
import Button from 'src/common/Button/Button';
import { AUTHORS, BTN_SHOW_COURSE, CREATED, DURATION } from 'src/constants';
import getCourseDuration from 'src/helpers/getCourseDuration';
import { Link } from 'react-router-dom';
import DeleteCourseButton from 'src/common/DeleteCourseButton/DeleteCourseButton';
import EditCourseButton from 'src/common/EditCourseButton/EditCourseButton';
import { useIsAdmin } from 'src/helpers/isAdmin';

interface CourseCardProps {
	id?: string;
	title?: string;
	description?: string;
	authors?: string;
	duration?: number;
	creationDate?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	const isAdmin = useIsAdmin();
	return (
		<li className={styles.courseCard}>
			<div className={styles.descriptionBlock}>
				<div className={styles.descriptionBlockTitle}>{title}</div>
				<div>{description}</div>
			</div>
			<div className={styles.infoBlock}>
				<div>
					<span className={styles.infoBlockTitle}>{AUTHORS}</span>
					<span>{authors.toString()}</span>
				</div>
				<div>
					<span className={styles.infoBlockTitle}>{DURATION}</span>
					<span>{getCourseDuration(duration)}</span>
				</div>
				<div>
					<span className={styles.infoBlockTitle}>{CREATED}</span>
					<span>{creationDate}</span>
				</div>
				<div className={styles.infoBlockButtons}>
					<Link to={`/courses/${id}`}>
						<Button buttonText={BTN_SHOW_COURSE} />
					</Link>
					{isAdmin && (
						<>
							<DeleteCourseButton id={id} />

							<Link to={`/courses/update/${id}`}>
								<EditCourseButton id={id} />
							</Link>
						</>
					)}
				</div>
			</div>
		</li>
	);
};

export default CourseCard;
