import { addAuthor, delAuthor, getAuthors } from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAuthorsThunk = createAsyncThunk(
	'authors/AuthorsList',
	async (thunkAPI) => {
		const authors = await getAuthors();
		return authors;
	}
);
export const addAuthorThunk = createAsyncThunk(
	'authors/addAuthor',
	async (name: string, thunkAPI) => {
		const author = await addAuthor(name);
		return author;
	}
);
export const delAuthorThunk = createAsyncThunk(
	'authors/delAuthor',
	async (id: string, thunkAPI) => {
		const author = await delAuthor(id);
		return author;
	}
);
