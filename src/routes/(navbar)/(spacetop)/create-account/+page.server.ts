import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { adminAuth, adminDB } from '$lib/server/admin';
import { error, fail, redirect } from '@sveltejs/kit';

// export const load: PageServerLoad = async ({ locals, params }) => {
// 	const uid = locals.userID;

// 	if (!uid) {
// 		throw error(401, 'Unauthorized request!');
// 		// redirect(301, '/login');
// 	}
// 	return {
// 		form: await superValidate(zod(formSchema))
// 	};
// };

export const load = (async ({ cookies }) => {
	const sessionCookie = cookies.get('__session');
	// console.log('session cookie', sessionCookie);

	try {
		await adminAuth.verifySessionCookie(sessionCookie!);
		return {
			form: await superValidate(zod(formSchema))
		};
	} catch (e) {
		console.log(e);
		// redirect(301, '/');
		throw error(401, 'Unauthorized request!');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log('form', form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const sessionCookie = event.cookies.get('__session');
		// console.log('session cookie', sessionCookie);
		const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
		const uid = decodedClaims.uid;

		if (!uid) {
			console.log('User not logged in!');
			return;
		}

		const userRef = adminDB.collection('user').doc(uid!);

		await userRef.set({
			...form.data
		});

		redirect(301, '/');
	}
};
