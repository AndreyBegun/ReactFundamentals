import { getUser } from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserThunk = createAsyncThunk('user/me', async (thunkAPI) => {
	const me = await getUser();
	return me;
});
