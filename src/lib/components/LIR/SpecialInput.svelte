<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let otpValues = ['', '', '', '', '', '', '', '', '', ''];

	//@ts-expect-error
	function handleInput(event, index) {
		let { value } = event.target;
		value = value.replace(/[^0-9a-z]/gi, '');
		otpValues[index] = value;

		if (value && index < 9) {
			const nextInput = event.target.nextSibling;
			if (nextInput) nextInput.focus();
		} else if (!value && index > 0) {
			const prevInput = event.target.previousSibling;
			if (prevInput) prevInput.focus();
		}

		if (value && index === 9) {
			dispatch('match', { otp: otpValues.join('') });
		}
	}

	//@ts-expect-error
	function handleBackspace(event, index) {
		if (event.key === 'Backspace' && index > 0 && !event.target.value) {
			const prevInput = event.target.previousSibling;
			if (prevInput) prevInput.focus();
		}
	}
</script>

<div class="otp-field">
	{#each Array.from({ length: 10 }) as _, index}
		<input type="text" maxlength="1" on:input={(event) => handleInput(event, index)} on:keydown={(event) => handleBackspace(event, index)} bind:value={otpValues[index]} class={index === 5 ? 'space' : ''} />
	{/each}
</div>

<style>
	.otp-field {
		display: flex;
	}
	.otp-field input {
		width: 35px;
		font-size: 16px;
		padding: 6px;
		text-align: center;
		border-radius: 5px;
		margin: 2px;
		border: 2px solid #55525c;
		background: #21232d;
		font-weight: bold;
		color: #fff;
		outline: none;
		transition: all 0.1s;
	}
	.otp-field input:focus {
		border: 2px solid #a527ff;
		box-shadow: 0 0 2px 2px #a527ff6a;
	}
</style>
