<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, user } from '$lib/firebase/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	async function buttonClick() {
		if ($user) {
			goto('/create-account?redirect=/lir');
		} else {
			await signInWithGoogle();
			goto('/create-account?redirect=/lir');
		}
	}

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
	}
</script>

<button on:click={buttonClick} class="mt-8 flex scale-125 flex-col items-center justify-center">
	<div class="font-jbMedium rounded-2xl bg-gray-600 bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] p-0.5 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#d2b863]">
		<div class="rounded-2xl bg-[#0f0913] py-3 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]">
			<div class=" transition duration-300 hover:drop-shadow-[0_0_0.2rem_#d2b863]">
				<div class="px-5 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]">Login</div>
			</div>
		</div>
	</div>
</button>
