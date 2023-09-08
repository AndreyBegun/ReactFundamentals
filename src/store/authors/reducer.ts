import { createSlice } from '@reduxjs/toolkit';
import { AuthorType } from './types';
import { addAuthorThunk, delAuthorThunk, getAuthorsThunk } from './thunk';

const initAuthorsState = [] as AuthorType[];

const authorsReducer = createSlice({
	name: 'authors',
	initialState: initAuthorsState,
	reducers: {
		dellAuthors: () => {
			return initAuthorsState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAuthorsThunk.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(addAuthorThunk.fulfilled, (state, action) => {
			return [...state, action.payload];
		});
		builder.addCase(delAuthorThunk.fulfilled, (state, action) => {
			return state.filter((author) => author.id === action.meta.arg);
		});
	},
});

export const { dellAuthors } = authorsReducer.actions;
export default authorsReducer.reducer;
