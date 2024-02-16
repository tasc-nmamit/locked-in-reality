import type { Timestamp } from 'firebase/firestore';

export default interface EventData {
	id: number;
	title: string;
	image: string;
	date: Timestamp;
	time: string;
	venue: string;
	organizers: string;
	description: string;
	guests: string;
	winners: string;
	reportLink: string;
	registrationLink: string;
}
