import React from 'react';
import styles from './EmptyCoursList.module.css';
import Button from 'src/common/Button/Button';
import {
	BTN_EMPTY_LIST,
	EMPTY_LIST,
	EMPTY_LIST_DESCRIPTION,
} from 'src/constants';

const EmptyCourseList: React.FC = () => (
	<div className={styles.emptyListCard}>
		<p className={styles.emptyListCardTitle}>{EMPTY_LIST}</p>
		<p className={styles.emptyListCardText}>{EMPTY_LIST_DESCRIPTION}</p>
		<Button buttonText={BTN_EMPTY_LIST} onClick={() => alert(BTN_EMPTY_LIST)} />
	</div>
);

export default EmptyCourseList;
