export type UserType = {
	name: string | null;
	email: string;
	password: string;
	role: string;
	id: string;
};

export const enum userActionTypes {
	SAVE_USER = 'SAVE_USER',
	DELETE_USER = 'DELETE_USER',
}

export interface SaveUser {
	type: userActionTypes.SAVE_USER;
	payload: UserType;
}
export interface DellUser {
	type: userActionTypes.DELETE_USER;
	payload: null;
}
export type UserAction = SaveUser | DellUser;
