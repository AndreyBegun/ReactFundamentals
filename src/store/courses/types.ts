export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};
export interface CoursAddFormData {
	title: string;
	description: string;
	duration: number | undefined;
	authors: string[];
}
export interface CoursUpdateFormData {
	formData: CoursAddFormData;
	id: string;
}
