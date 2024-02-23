<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { db, user, userData, userProfileData } from '$lib/firebase/firebase';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let questionURLBase = '/LIR/quiz';
	let score = 0;
	let currentQuestion = 0;
	let questionCounter = 0;
	let isStarted = false;
	let startTime: number;
	let penaltyTime: number = 0;
	let hintSelected: boolean[] = new Array(data.list.length).fill(false);
	let hintView = false;
	let dataTeam: TeamData | null = null;
	let submitted = false;

	let time: string = '';
	let duration: number;

	function formatTime(seconds: number): string {
		let hours = Math.floor(seconds / 3600);
		let minutes = Math.floor((seconds % 3600) / 60);
		seconds = seconds % 60;

		// @ts-expect-error
		hours = hours >= 10 ? hours : '0' + hours.toString();
		// @ts-expect-error
		minutes = minutes >= 10 ? minutes : '0' + minutes.toString();
		// @ts-expect-error
		seconds = seconds >= 10 ? seconds : '0' + seconds.toString();

		let timeStr = `${hours}:${minutes}:${seconds}`;

		return timeStr;
	}

	function startCountdown() {
		let remainingTime = duration;
		const countdownInterval = setInterval(() => {
			if (remainingTime <= 0) {
				clearInterval(countdownInterval);
				localStorage.removeItem('remainingTime');
				stopTimer();
				alert('Time Up, your score has been recorded!');
				submitted = true;
				localStorage.setItem('submitted', JSON.stringify(submitted));
			} else {
				time = formatTime(remainingTime);
				localStorage.setItem('remainingTime', remainingTime.toString());
				remainingTime--;
			}
		}, 1000);
	}

	function generateRandomNumber() {
		const randomNumber = Math.random();
		const randomNumberInRange = Math.floor(randomNumber * 5) + 1;
		return randomNumberInRange;
	}

	import CharInput from '$lib/components/LIR/SpecialInput.svelte';

	import { redirect } from '@sveltejs/kit';
	import { doc, getDoc, writeBatch } from 'firebase/firestore';

	let otpValue = '';
	//@ts-expect-error
	function checkMatch(event) {
		const enteredOtp = event.detail.otp;
		if (enteredOtp === '1369443186') {
			stopTimer();
			alert('success, your time has been recorded!');
			submitted = true;
			localStorage.setItem('submitted', JSON.stringify(submitted));
		} else {
			penaltyTime += 120;
			localStorage.setItem('penaltyTime', penaltyTime.toString());
			alert('Unsuccesfull attempt, You are punished');
		}
	}

	function startTimer() {
		startTime = new Date().getTime();
		localStorage.setItem('startTime', startTime.toString());
		startCountdown();
	}

	async function stopTimer() {
		const endTime = new Date().getTime();
		const timeDiff = endTime - startTime;
		let seconds = Math.floor(timeDiff / 1000);
		seconds += penaltyTime;
		let teamURL = $userProfileData?.lir;
		//@ts-ignore
		const teamRef = doc(db, 'lir', teamURL);
		const batch = writeBatch(db);
		console.log(teamRef);
		batch.update(teamRef, {
			time: seconds,
			score: score
		});
		await batch.commit();
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

	function handelGetHint() {
		hintSelected[currentQuestion] = !hintSelected[currentQuestion];
		hintView = false;
		penaltyTime += 120;
		localStorage.setItem('penaltyTime', penaltyTime.toString());
	}

	function causeRedirect(path: string) {
		redirect(300, path);
	}

	import type { TeamData } from '$lib/types/TeamData';
	import { onDestroy, onMount } from 'svelte';

	function confirmReload(event: { preventDefault: () => void; returnValue: string }) {
		event.preventDefault();
	}

	onMount(() => {
		console.log($userData);
		const storedSubmitted = localStorage.getItem('submitted');
		const storedStartTime = localStorage.getItem('startTime');
		const storedisStarted = localStorage.getItem('isStarted');
		const storedPenaltyTime = localStorage.getItem('penaltyTime');

		if (storedPenaltyTime) {
			penaltyTime = parseInt(storedPenaltyTime);
		}
		if (storedisStarted) {
			isStarted = JSON.parse(storedisStarted);
		}
		if (storedStartTime) {
			startTime = parseInt(storedStartTime);
		}
		if (storedSubmitted) {
			submitted = JSON.parse(storedSubmitted);
		}

		duration = parseInt(localStorage.getItem('remainingTime') || '3600');
		if (isStarted) {
			startCountdown();
		}
		window.addEventListener('beforeunload', confirmReload);
		return () => {
			window.removeEventListener('beforeunload', confirmReload);
		};
	});
</script>

<div class={`background -z-10 h-screen w-full`}></div>
{#if !$user}
	<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
		<h2 class="font-jbExtrabold pb-6 pt-4 text-4xl">You need to login!</h2>
		<a href="/"><Button>Goto Homepage</Button></a>
	</div>
{:else if !$userProfileData?.lir}
	<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
		<h2 class="font-jbExtrabold pb-6 pt-4 text-4xl">You need to create a team first!</h2>
		<a href="/team"><Button>Goto Team</Button></a>
	</div>
{:else if submitted}
	<div class="flex h-screen items-center justify-center">
		<h1 class="text-3xl">Your time has been recorded!, If qualified you will be contacted soon!</h1>
	</div>
{:else}
	<section class={`h-screen w-full`}>
		<!-- <p class="absolute top-0 z-50">{JSON.stringify(data)}</p> -->
		<div class="absolute left-0 top-0 z-20 text-white">
			{time}
		</div>
		{#if !isStarted}
			<div class="z-20 mx-auto flex flex-col items-center justify-center gap-4">
				<button
					class="mx-auto rounded-md border-[1px] border-white px-4 py-2 backdrop-blur-lg duration-500 ease-in-out hover:scale-110"
					on:click={() => {
						isStarted = true;
						localStorage.setItem('isStarted', JSON.stringify(isStarted));
						startTimer();
					}}>Start Quiz!</button
				>
				<p class="max-w-md text-center text-2xl font-bold">Once clicked the timer will start!</p>
			</div>
		{:else}
			<div class="mx-auto flex w-full flex-col items-center gap-y-4">
				<div class="relative z-10 flex min-w-[36rem] max-w-xl flex-col items-center gap-4 rounded-lg border-[1px] border-white bg-black p-10">
					<!-- hint alert dialog -->
					<div class="z-20 ml-auto">
						<AlertDialog.Root>
							<AlertDialog.Trigger><Icon icon="tabler:bulb" style="color: white" class="h-8 w-8" /></AlertDialog.Trigger>
							<AlertDialog.Content class="bg-black">
								<AlertDialog.Header>
									{#if data.list[currentQuestion].hint}
										{#if hintSelected[currentQuestion] === false}
											{#if hintView === false}
												<div class="flex flex-row items-center gap-4">
													<Icon icon="noto:warning" class="h-10 w-10" />
													<AlertDialog.Title class="text-2xl">Attention</AlertDialog.Title>
												</div>
												<AlertDialog.Title class="text-lg">Do you want to use hint for this riddle?</AlertDialog.Title>
												<AlertDialog.Description>The hint will be displayed once and a penalty of 120sec will be imposed</AlertDialog.Description>
												<div class="flex w-full flex-row gap-2">
													<AlertDialog.Cancel class="basis-1/2 hover:bg-[#a527ff]">Close</AlertDialog.Cancel>
													<Button
														class="basis-1/2 text-black"
														on:click={() => {
															hintView = true;
														}}>Use Hint</Button
													>
												</div>
											{:else}
												<div class="flex flex-row items-center gap-4">
													<Icon icon="tabler:bulb" class="h-10 w-10" />
													<AlertDialog.Title class="text-2xl">Hint</AlertDialog.Title>
												</div>
												<AlertDialog.Title class="text-lg">Hint: {data.list[currentQuestion].hint}</AlertDialog.Title>
												<AlertDialog.Description>The hint will be displayed once</AlertDialog.Description>
												<AlertDialog.Cancel class="hover:bg-[#a527ff]" on:click={handelGetHint}>Close</AlertDialog.Cancel>
											{/if}
										{:else}
											<div class="flex flex-row items-center gap-4">
												<Icon icon="fxemoji:crossmark" class="h-10 w-10" />
												<AlertDialog.Title class="text-2xl">Not Allowed</AlertDialog.Title>
											</div>
											<AlertDialog.Description>You have already used the hint</AlertDialog.Description>
											<AlertDialog.Cancel class="hover:bg-[#a527ff]">Close</AlertDialog.Cancel>
										{/if}
									{:else}
										<div class="flex flex-row items-center gap-4">
											<Icon icon="fxemoji:crossmark" class="h-8 w-8" />
											<AlertDialog.Title>Sorry, No hint available for this question</AlertDialog.Title>
										</div>
										<AlertDialog.Cancel class="basis-1/2 hover:bg-[#a527ff]">Close</AlertDialog.Cancel>
									{/if}
								</AlertDialog.Header>
							</AlertDialog.Content>
						</AlertDialog.Root>
					</div>
					<!-- hint alert dialog end -->

					<h1 class="self-start text-left text-xl font-medium">
						<!-- {currentQuestion + 1}. {data.list[currentQuestion].question} -->
						<img src={`${questionURLBase}/${currentQuestion + 1}.jpg`} alt="questionImage" class="w-full" />
					</h1>
					<Input type="text" placeholder="Type your answer" class="border-gray-500" bind:value={data.answers[currentQuestion].answer} on:input={handleInputChange} />
					{#if data.answers[currentQuestion].answered}
						{#if data.answers[currentQuestion].answer.toLowerCase().trim() === data.list[currentQuestion].answer.toLowerCase().trim()}
							<p class="text-center text-white"><span class="font-semibold text-purple-500">Success!</span><br />Decryption Code : {data.list[currentQuestion].key}</p>
						{:else}
							<p class="text-white">Error Wrong Code!</p>
						{/if}
					{/if}

					<!-- <p>Questions Attempted: {questionCounter}/{data.list.length}</p> -->
					<div class="flex flex-row flex-wrap items-center justify-center gap-3">
						{#each { length: data.list.length } as _, i}
							<button
								class="btn flex h-8 w-6 items-center justify-center {data.answers[i].answered && currentQuestion !== i ? 'btn-warning' : 'btn-outline'} {currentQuestion === i ? 'btn-active' : ''}"
								on:click={() => {
									currentQuestion = i;
								}}><p>{i + 1}</p></button
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
						<AlertDialog.Content class="bg-black/80">
							<AlertDialog.Header>
								<AlertDialog.Title>Enter the values here to Decode</AlertDialog.Title>
								<AlertDialog.Description>Solve all the riddles to enter the final decoding value. <span class="font-bold text-purple-600">WARNING:</span> Wrong decoded value will add penalty to your final time!</AlertDialog.Description>
								<AlertDialog.Description
									><div class="mb-1">
										<h2 class="mb-1 text-white">Enter the decryption code:</h2>
										<CharInput on:match={checkMatch} />
									</div></AlertDialog.Description
								>
								<AlertDialog.Cancel class="border-[.5px] border-white/30 hover:bg-[#a527ff]">Cancel</AlertDialog.Cancel>
							</AlertDialog.Header>
						</AlertDialog.Content>
					</AlertDialog.Root>
				</div>
			</div>
		{/if}
	</section>
{/if}

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
		background-image: url('/LIR/3.webp');
		background-size: cover; /* Apply blur to the background image */
		filter: blur(5px);
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
