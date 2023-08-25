import { AuthorsActionTypes, AuthorType } from './types';

type SaveAuthorsAction = {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorType[];
};
type AddAuthorAction = {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorType;
};
export const saveAuthorsAction = (
	authorsData: AuthorType[]
): SaveAuthorsAction => ({
	type: AuthorsActionTypes.SAVE_AUTHORS,
	payload: authorsData,
});
export const addAuthorAction = (authorData: AuthorType): AddAuthorAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR,
	payload: authorData,
});
