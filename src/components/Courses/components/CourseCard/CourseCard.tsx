import React from 'react';
import styles from './CourseCard.module.css';
import Button from 'src/common/Button/Button';
import { AUTHORS, BTN_SHOW_COURSE, CREATED, DURATION } from 'src/constants';

interface CourseCardProps {
	title?: string;
	description?: string;
	authors?: string;
	duration?: number;
	creationDate?: string;
	onShowCourse: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
	title,
	description,
	authors,
	duration,
	creationDate,
	onShowCourse,
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
				<span>{duration}</span>
			</div>
			<div>
				<span className={styles.infoBlockTitle}>{CREATED}</span>
				<span>{creationDate}</span>
			</div>
			<Button buttonText={BTN_SHOW_COURSE} onClick={onShowCourse} />
		</div>
	</li>
);

export default CourseCard;
