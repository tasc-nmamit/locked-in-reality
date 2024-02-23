import { z } from 'zod';

export const formSchema = z.object({
	name: z
		.string()
		.regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
			message: 'Name must contain only letters and spaces and must not begin or end with a space'
		})
		.min(3)
		.max(50),
	phone: z.string().min(10).max(15),
	email: z.string().email(),
	team: z.string().min(2).max(50)
});

export type FormSchema = typeof formSchema;
