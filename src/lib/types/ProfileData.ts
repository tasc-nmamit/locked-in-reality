/*
 * Todo: rename this file UserData.ts and update all imports
 */

import type { Timestamp } from 'firebase/firestore';
interface Link {
	url: string;
	platform: string;
	title: string;
}

// Immutable Data will be present in user collection
interface ImmutableData {
	username: string;
	name: string;
	email: string;
	achievements: string[];
	[dynamicField: string]: unknown;
}

// Mutable Data will be present in profile collection
interface Achievement {
	certificateTitle: string;
	certificateID: string;

	issueDate: Timestamp;
	organization: string;
	validity: string;

	occasionType: string;
	occasionID: string;
	occasionName: string;
	class: string;
	position?: string;

	teamID?: string;
	teamName?: string;
}

type DynamicFields<T> = {
	[K in keyof T as `${string & K}`]: Achievement;
};

interface MutableData {
	usn?: string;
	phone?: string;
	college?: string;
	branch?: string;
	photoURL: string;
	bio: string;
	color_light: string;
	color_dark: string;
	links: Link[];
	snh2023: string;
	snh2023final: string;
	lir: string;
}

// Intersection of TeamData and DynamicHistoryFields to enforce the structure
export type ProfileData = ImmutableData & DynamicFields<ImmutableData> & MutableData;
