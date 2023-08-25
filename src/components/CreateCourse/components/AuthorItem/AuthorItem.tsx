import React, { FC, useState } from 'react';
import styles from './AuthorItem.module.css';
import {
	ADD_AUTHOR_NAME,
	ADD_BTN_CRT_AUTHOR,
	mockedAuthorsList,
} from 'src/constants';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import pluss from '../../../../assets/pluss.svg';
import trash from '../../../../assets/trash.svg';
import generateRandomId from 'src/helpers/generateRandomId';

interface AuthorsItemProps {
	onAddAuthor: (id: string) => void;
	onDeleteAuthor: (id: string) => void;
}

const AuthorsItem: FC<AuthorsItemProps> = ({ onAddAuthor, onDeleteAuthor }) => {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const onCreateAuthor = (e) => {
		e.preventDefault();

		let validationError = '';
		if (inputValue.length < 2) {
			validationError = `Author name is required`;
		}
		setError(validationError);
		if (!validationError) {
			setAuthors((prevList) => [
				...prevList,
				{ id: generateRandomId(), name: inputValue },
			]);
			setInputValue('');
		}
	};
	return (
		<div className={styles.root}>
			<div className={styles.inputBlock}>
				<Input
					label={ADD_AUTHOR_NAME}
					value={inputValue}
					onChange={handleChange}
					error={error}
				/>
				<Button buttonText={ADD_BTN_CRT_AUTHOR} onClick={onCreateAuthor} />
			</div>
			<div className={styles.authorsList}>
				<h4 className={styles.listTitle}>Authors list</h4>
				{authors?.map((a) => (
					<div>
						<span className={styles.authorName}>{a.name}</span>
						<span className={styles.plussButton}>
							<img
								src={pluss}
								alt='pluss'
								width='13'
								height='13'
								onClick={() => onAddAuthor(a.id)}
							/>
						</span>
						<span className={styles.trashButton}>
							<img
								src={trash}
								alt='trash'
								width='13'
								height='13'
								onClick={() => onDeleteAuthor(a.id)}
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default AuthorsItem;
