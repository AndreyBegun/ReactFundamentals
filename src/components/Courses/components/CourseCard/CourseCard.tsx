import React from 'react';
import styles from './CourseCard.module.css';
import Button from 'src/common/Button/Button';
import { AUTHORS, BTN_SHOW_COURSE, CREATED, DURATION } from 'src/constants';
import getCourseDuration from 'src/helpers/getCourseDuration';
import { Link } from 'react-router-dom';

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
}) => (
	<li className={styles.courseCard}>
		<div className={styles.descriptionBlock}>
			<div className={styles.descriptionBlockTitle}>{title}</div>
			<div>{description}</div>
		</div>
		<div className={styles.infoBlock}>
			<div>
				<span className={styles.infoBlockTitle}>{AUTHORS}</span>
				<span>{authors}</span>
			</div>
			<div>
				<span className={styles.infoBlockTitle}>{DURATION}</span>
				<span>{getCourseDuration(duration)}</span>
			</div>
			<div>
				<span className={styles.infoBlockTitle}>{CREATED}</span>
				<span>{creationDate}</span>
			</div>
			<Link to={`/courses/${id}`}>
				<Button buttonText={BTN_SHOW_COURSE} />
			</Link>
		</div>
	</li>
);

export default CourseCard;
