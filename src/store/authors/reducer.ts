import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorType } from './types';
import { getAuthorsThunk } from './thunk';

const initCoursesState = [] as AuthorType[];

const authorsReducer = createSlice({
	name: 'authors',
	initialState: initCoursesState,
	reducers: {
		addAuthor: (state, action: PayloadAction<AuthorType>) => {
			return [...state, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAuthorsThunk.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const { addAuthor } = authorsReducer.actions;
export default authorsReducer.reducer;
