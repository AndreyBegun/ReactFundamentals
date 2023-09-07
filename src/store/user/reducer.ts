import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk } from './thunk';
import { UserState } from './types';

const initialState: UserState | null = {
	name: '',
	email: '',
	password: '',
	role: '',
	id: '',
};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		dellUser: () => {
			return null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserThunk.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const { dellUser } = userReducer.actions;
export default userReducer.reducer;
