export interface Submission {
	PID?: string;
	college?: string;
	link?: string;
	title?: string;
}

export interface TeamData {
	teamName: string;
	teamURL: string;
	teamSecret: string;
	college?: string;
	time: number;
	score: string;

	leader: string;
	leaderName: string;
	leaderPhone: string;
	leaderEmail: string;

	members: string[];
	memberInfo: any[];

	memberCount: number;
	acceptingMembers: boolean;

	createdAt: string;

	// PID?: string;
	// submission?: Submission;
	// submissionHistory?: Submission[];
	// qualified?: boolean;
	// payment?: boolean;
	// proofURL?: string;
}

interface TeamDataSNH2023Basic {
	teamName: string;
	teamID: string;
	teamSecret: string;
	college: string;
	arrived: boolean;

	leader: string;
	leaderName: string;
	leaderPhone: string;
	leaderEmail: string;

	// PID: string;
	// submission: {
	// 	link: string;
	// 	PID: string;
	// 	title: string;
	// 	college: string;
	// };

	floor?: string;
	room?: string;
	certificate?: boolean;

	members: string[];
	memberCount: number;

	createdAt: {
		seconds: number;
		nanoseconds: number;
	};

	[dynamicField: string]: unknown;

	// [dynamicHistoryField: historyIndex]: {
	// 	status: string;
	// 	timestamp: {
	// 		seconds: number;
	// 		nanoseconds: number;
	// 	};
	// }[] | undefined;
}

interface HistoryItem {
	status: string;
	timestamp: {
		seconds: number;
		nanoseconds: number;
	};
}

interface UserItem {
	name: string;
	email: string;
	phone: string;
	usn: string;
	scanned: boolean;
	status: string;
	timestamp: {
		seconds: number;
		nanoseconds: number;
	};
}

type historyIndex = `${string}_history`;

// Define a mapped type for dynamic history fields
type DynamicHistoryFields<T> = {
	[K in keyof T as `${string & K}_history`]: HistoryItem[];
};

type DynamicUserFields<T> = {
	[K in keyof T as `${string & K}`]: UserItem;
};

// Intersection of TeamData and DynamicHistoryFields to enforce the structure
export type TeamDataSNH2023 = TeamDataSNH2023Basic & DynamicHistoryFields<TeamDataSNH2023Basic> & DynamicUserFields<TeamDataSNH2023Basic>;
