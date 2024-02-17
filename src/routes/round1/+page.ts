import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { db } from '$lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

function shuffle(array: number[]) {
	let i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function rg(n: number) {
	const arr = [...Array(n).keys()];
	return shuffle(arr);
}

export const load: PageLoad = async () => {
	const docRef = doc(db, 'quiz', 'nmZLhL8mlFRvulElpgPA');
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const list = docSnap.data().questions;
		// console.log(list);
		const answers = [];

		for (let i = 0; i < list.length; i++) {
			answers.push({ answered: false, answer: '', order: rg(list[i].length) });
		}

		return {
			list: [...list],
			answers: [...answers]
		};
	} else {
		throw error(404, 'No such quiz!');
	}
};
