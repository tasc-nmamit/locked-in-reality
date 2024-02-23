<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { Label } from '$lib/components/ui/label';
	import { arrayUnion, doc, writeBatch } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';

	const teamList = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];
	let teamID: { value: string; label: string } = { value: '', label: '' };

	let scanning = false;
	let html5Qrcode: Html5Qrcode;
	let info: string | {} = '';

	let status: 'inside' | 'outside' = 'outside';

	onMount(init);
	function init() {
		html5Qrcode = new Html5Qrcode('reader');
	}

	function start() {
		if (!teamID.value) {
			alert('Please select your team');
			return;
		}

		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 10,
				qrbox: { width: 250, height: 250 }
			},
			onScanSuccess,
			onScanFailure
		);
		scanning = true;
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	function isJson(str: string) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	async function onScanSuccess(decodedText: string, decodedResult: any) {
		if (isJson(decodedText)) {
			info = JSON.parse(decodedText);
		} else {
			info = decodedText;
		}

		console.log('decoded Text', decodedText, 'decoded Result', decodedResult);
		await updateStatus(decodedText);
	}

	async function updateStatus(decodedText: string) {
		const team: string = teamID.value;
		const info: string = decodedText;

		const batch = writeBatch(db);
		const teamRef = doc(db, 'lirqr', team);

		batch.update(teamRef, {
			scanned: arrayUnion(info)
		});

		await batch.commit();
		alert('Status updated');
	}

	function onScanFailure(error: any) {
		console.warn(`Code scan error = ${error}`);
	}
</script>

{#if !teamID.value}
	<Select.Root bind:selected={teamID} portal={null}>
		<div class="flex items-start justify-center gap-6 rounded-lg p-8 align-middle">
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Select your team" />
			</Select.Trigger>
		</div>
		<Select.Content>
			<Select.Group>
				<Select.Label>Select Your Team</Select.Label>
				<!-- <Select.Item value={''} label={''} disabled={true}>None</Select.Item> -->
				{#each teamList as team}
					<Select.Item value={team} label={team}>{team}</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
		<Select.Input name="team" />
	</Select.Root>
{:else}
	<div class="flex flex-wrap items-start justify-center gap-6 rounded-lg p-8 align-middle">
		<Label class="inline-flex h-10 items-center justify-center whitespace-nowrap px-4 py-2 text-lg font-semibold">{teamID.label}</Label>
		<Button variant="secondary" on:click={() => (teamID = { value: '', label: '' })}>Change</Button>
	</div>
{/if}

<hr class="w-full" />

<div class="flex flex-wrap items-start justify-center gap-6 rounded-lg p-8">
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>Scan QR Code</Card.Title>
			<!-- <Card.Description>Scan QR Code</Card.Description> -->
		</Card.Header>
		<Card.Content>
			<div class="scanner overflow-hidden">
				<reader id="reader" />
			</div>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			{#if scanning}
				<Button class="w-full" on:click={stop}>Stop</Button>
			{:else}
				<Button class="w-full" on:click={start}>Start</Button>
			{/if}
		</Card.Footer>
	</Card.Root>
	<Card.Root class="w-[350px]">
		<Card.Header>
			<Card.Title>Information Receieved</Card.Title>
			<!-- <Card.Description></Card.Description> -->
		</Card.Header>
		<Card.Content>
			{#if info && info['key'] && info['text']}
				<div class="space-y-2">
					<!-- <p class="text-lg font-semibold">Key -> {info['key']}</p> -->
					<p class="text-lg font-semibold">{info['text']}</p>
				</div>
			{:else if info}
				<div class="space-y-2">
					<p class="text-lg font-semibold">{info}</p>
				</div>
			{:else}
				<div class="space-y-2">
					<Skeleton class="h-4 w-[250px]" />
					<Skeleton class="h-4 w-[200px]" />
				</div>
			{/if}
		</Card.Content>
	</Card.Root>
</div>

<style>
	.scanner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	reader {
		width: 100%;
		min-height: 250px;
		background-color: black;
	}
</style>
