import type { Timestamp } from 'firebase/firestore';

export interface CertificateStaticData {
	// Certificate details
	certificateTitle: string;
	version?: string;
	validity?: number; // Certificate validity (in years from issueDate)
	issueDate: Timestamp;
	startDate: Timestamp;
	endDate: Timestamp;

	// occasion and class identify the certificate
	occasionType: string; // eg. Hackathon, Workshop, Webinar, Office-bearers etc.
	occasionID: string; // eg. snh2023, snh2023final etc.
	occasionName: string;
	class: string; // eg. participant, winner, runners up, organizer, volunteer etc.
	position?: string; // if class equals winner, indicates winner, runner up etc.
	description?: string; // Describes the occasion and class eg. "Hackathon Participant", "Workshop Organizer", etc.

	// We have organization field because we plan to allow multiple organizations to issue certificates in the future
	organization: string;
	organizationLogo: string;
	issuerNames: string[];
	issuerDesignations: string[];
	issuerSignatures: string[];
}

export interface IndividualDetails extends CertificateStaticData {
	// Recipient details
	userID: string;
	name: string;
	email: string;
	college: string;
	usn?: string;
	branch?: string;

	// Team details
	teamID?: string;
	teamName?: string;
}

export interface CertificateData extends IndividualDetails {
	certificateID: string;

	// Certificate authenticity
	hash: string;
}
