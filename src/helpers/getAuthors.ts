import { AuthorType } from 'src/store/authors/types';

export const getAuthors = (
	authors: string[],
	authorsList: AuthorType[]
): string[] =>
	authors?.map(
		(id) => `${authorsList.find((author) => author.id === id)?.name} `
	);
