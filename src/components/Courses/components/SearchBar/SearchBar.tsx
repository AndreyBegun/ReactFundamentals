import React, { ChangeEvent } from 'react';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import styles from './SearchInput.module.css';
import inputStyles from '../../../../common/Input/Input.module.css';
import { BTN_SEARCH, INPUT_PLACEHOLDER } from 'src/constants';

interface SearchBarProps {
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSearch: () => void;
	inputText: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
	onInputChange,
	onSearch,
	inputText,
}) => {
	return (
		<div style={{ display: 'flex' }}>
			<Input
				placeholder={INPUT_PLACEHOLDER}
				value={inputText}
				className={`${styles.searchInput} ${inputStyles.input}`}
				onChange={onInputChange}
				maxLength={150}
			/>
			<Button buttonText={BTN_SEARCH} onClick={onSearch} />
		</div>
	);
};

export default SearchBar;
