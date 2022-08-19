export type socialLink = {
	icon: string;
	value: string;
};

export interface aboutMe {
	firstname: string;
	lastname: string;
	jobTitle: string;
	description: string;
	socialLinks: socialLink[];
}
