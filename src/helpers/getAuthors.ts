import { mockedAuthorsList } from '../constants';

export const getAuthors = (authors) =>
	authors?.map(
		(id) => `${mockedAuthorsList.find((author) => author.id === id).name} `
	);
