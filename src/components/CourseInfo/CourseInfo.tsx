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

interface CourseInfoProps {
	id?: string;
	title?: string;
	description?: string;
	authors?: string[];
	duration?: number;
	creationDate?: string;
	onBtnClick: () => void;
}

const CourseInfo: React.FC<CourseInfoProps> = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
	onBtnClick,
}) => (
	<div className={styles.courseInfo}>
		<div className={styles.title}>{title}</div>
		<div className={styles.courseCard}>
			<div className={styles.descriptionBlock}>
				<div className={styles.descriptionBlockTitle}>{DESCRIPTION}</div>
				<div>{description}</div>
			</div>

			<div className={styles.infoBlock}>
				<div className={styles.infoBlockLine}>
					<div className={styles.infoBlockTitle}>{ID}</div>
					<span>{id}</span>
				</div>
				<div className={styles.infoBlockLine}>
					<span className={styles.infoBlockTitle}>{DURATION}</span>
					<span>{duration}</span>
				</div>
				<div className={styles.infoBlockLine}>
					<span className={styles.infoBlockTitle}>{CREATED}</span>
					<span>{creationDate}</span>
				</div>
				<div className={styles.infoBlockLine}>
					<span className={styles.infoBlockTitle}>{AUTHORS}</span>
					<span>{getAuthors(authors)}</span>
				</div>
			</div>
		</div>
		<div className={styles.buttonWraper}>
			<Button buttonText={BTN_BACK} onClick={onBtnClick} />
		</div>
	</div>
);

export default CourseInfo;
