<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Input from '$lib/components/ui/input/input.svelte';
	import { user, userData } from '$lib/firebase/firebase';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let score = 0;
	let currentQuestion = 0;
	let questionCounter = 0;
	let isStarted = false;
	let startTime: number;
	let penaltyTime: number = 0;

	function generateRandomNumber() {
		const randomNumber = Math.random();
		const randomNumberInRange = Math.floor(randomNumber * 5) + 1;
		return randomNumberInRange;
	}

	import CharInput from '$lib/components/LIR/SpecialInput.svelte';
	import { redirect } from '@sveltejs/kit';
	import { toast } from '@zerodevx/svelte-toast';

	let otpValue = '';
	//@ts-expect-error
	function checkMatch(event) {
		const enteredOtp = event.detail.otp;
		if (enteredOtp === '1234567890') {
			stopTimer();
		} else {
			// Do something if OTP doesn't match
			penaltyTime += 5;
			alert('Unsuccesfull attempt, You are punished');
		}
	}
	function startTimer() {
		startTime = new Date().getTime();
	}

	function stopTimer() {
		const endTime = new Date().getTime();
		const timeDiff = endTime - startTime;
		let seconds = Math.floor(timeDiff / 1000);
		seconds += penaltyTime;
		alert(`You took ${seconds} seconds to complete the quiz!`);
	}

	function prevClick() {
		if (currentQuestion === 0) {
			return;
		}
		currentQuestion--;
	}

	function nextClick() {
		if (currentQuestion === data.list.length - 1) {
			return;
		}
		currentQuestion++;
	}
	//data.list[currentQuestion].hint
	function handleInputChange(event: InputEvent) {
		const target = event.target as HTMLInputElement;
		data.answers[currentQuestion].answer = target.value.toLowerCase().trim();

		const correctAnswer = data.list[currentQuestion].answer.toLowerCase().trim();
		const userAnswer = data.answers[currentQuestion].answer;

		if (userAnswer === correctAnswer) {
			score++;
		}

		if (!data.answers[currentQuestion].answered) {
			questionCounter++;
		}
		data.answers[currentQuestion].answered = true;
	}
</script>

{#if !$user && !userData}
	{redirect(300, '/login')}
{/if}

<section class={`h-screen w-full`}>
	<!-- <p class="absolute top-0 z-50">{JSON.stringify(data)}</p> -->
	<div class={`background`}></div>
	{#if !isStarted}
		<div class="z-20 mx-auto flex flex-col items-center justify-center gap-4">
			<button
				class="mx-auto rounded-md border-[1px] border-white px-4 py-2 backdrop-blur-lg duration-500 ease-in-out hover:scale-110"
				on:click={() => {
					isStarted = true;
					startTimer();
				}}>Start Quiz!</button
			>
			<p class="max-w-md text-center text-2xl font-bold">Once clicked the timer will start!</p>
		</div>
	{:else}
		<div class="mx-auto flex w-full flex-col items-center gap-y-4">
			<div class="relative z-10 flex min-w-[36rem] max-w-xl flex-col items-center gap-4 rounded-lg border-[1px] border-white bg-black/5 p-10 backdrop-blur-md">
				<h1 class="self-start text-left text-xl font-medium">
					{currentQuestion + 1}. {data.list[currentQuestion].question}
				</h1>
				<Input type="text" placeholder="Type your answer" class="border-gray-500" bind:value={data.answers[currentQuestion].answer} on:input={handleInputChange} />
				{#if data.answers[currentQuestion].answered}
					{#if data.answers[currentQuestion].answer.toLowerCase().trim() === data.list[currentQuestion].answer.toLowerCase().trim()}
						<p class="text-white">Decryption Code :{data.list[currentQuestion].key}</p>
					{:else}
						<p class="text-white">Error Wrong Code!</p>
					{/if}
				{/if}
				<!-- hint[]=false
				hint[currentQuestion] = true
				if hint[]
					-->
				<!-- {#if currentQuestion === data.list.length - 1 && questionCounter === data.list.length}
                <h1>Score: {score}</h1>
            {/if} -->

				<p>Questions Attempted: {questionCounter}/{data.list.length}</p>
				<div class="flex flex-row flex-wrap items-center justify-center gap-3">
					{#each { length: data.list.length } as _, i}
						<button
							class="btn w-8 {data.answers[i].answered && currentQuestion !== i ? 'btn-warning' : 'btn-outline'} {currentQuestion === i ? 'btn-active' : ''}"
							on:click={() => {
								currentQuestion = i;
							}}>{i + 1}</button
						>
					{/each}
				</div>
				<div class="absolute bottom-2 flex w-full flex-row items-center justify-between gap-3 px-6">
					<button class="" on:click={prevClick}><Icon icon="foundation:arrow-left" class="h-8 w-8" /></button>
					<button class="" on:click={nextClick}><Icon icon="foundation:arrow-right" class="h-8 w-8" /></button>
				</div>
			</div>
			<div class="z-20">
				<AlertDialog.Root>
					<AlertDialog.Trigger class="rounded-md border-[1px] border-white bg-transparent px-4 py-3 backdrop-blur-lg">Click to Decode</AlertDialog.Trigger>
					<AlertDialog.Content class="bg-black">
						<AlertDialog.Header>
							<AlertDialog.Title>Enter the values here to Decode</AlertDialog.Title>
							<AlertDialog.Description>Solve all the riddles to enter the final decoding value. <span class="font-bold text-purple-600">WARNING,</span> Wrong decoded value will add penalty to your final time!</AlertDialog.Description>
							<AlertDialog.Description
								><div>
									<h2 class="text-white">Enter the decryption code:</h2>
									<CharInput on:match={checkMatch} />
								</div></AlertDialog.Description
							>
							<AlertDialog.Cancel class="hover:bg-[#a527ff]">Cancel</AlertDialog.Cancel>
						</AlertDialog.Header>
					</AlertDialog.Content>
				</AlertDialog.Root>
			</div>
		</div>
	{/if}
</section>

<style>
	.btn {
		background-color: transparent;
		border: 0.5px solid rgb(173, 173, 173);
		padding: 0.5rem;
		color: white;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}

	.btn-active {
		background-color: white;
		color: #000000;
	}

	section {
		position: relative;
		display: flex;
		align-items: center;
		justify-items: center;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/LIR/1.jpg');
		background-size: cover; /* Apply blur to the background image */
		background-color: rgba(0, 0, 0, 0.6);
	}
	.background::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.test {
		border: solid 1px dimgrey;
		width: 11.5vw; /* Use 100% width */
		background: repeating-linear-gradient(90deg, #000000 0px, #000000 19px, #ffffff 20px);
		color: white;
		font-family: monospace;
		letter-spacing: 0.7vw; /* Use relative unit for letter spacing */
		padding-left: 0.7ch;
		height: 2.5vw; /* Use relative unit for height */
		text-align: justify; /* Use text-align: center instead of text-align: justify */
		text-justify: inter-character;
	}

	.test:focus {
		outline: none;
		color: white;
	}
</style>
