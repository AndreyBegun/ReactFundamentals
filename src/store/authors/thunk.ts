import { getAuthors } from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAuthorsThunk = createAsyncThunk(
	'authors/AuthorsList',
	async (thunkAPI) => {
		const authors = await getAuthors();
		return authors;
	}
);
