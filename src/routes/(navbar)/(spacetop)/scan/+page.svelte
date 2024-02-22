<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let scanning = false;
	let html5Qrcode: Html5Qrcode;
	let info: string = '';

	let status: 'inside' | 'outside' = 'outside';

	onMount(init);
	function init() {
		html5Qrcode = new Html5Qrcode('reader');
	}

	function start() {
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

	async function onScanSuccess(decodedText: string, decodedResult: any) {
		info = decodedText;
		console.log('decoded Text', decodedText, 'decoded Result', decodedResult);
		// await updateStatus(decodedText);
	}

	// async function updateStatus(decodedText: string) {
	// 	const data = JSON.parse(decodedText);
	// 	// console.log(data);

	// 	const team: string = data.team;
	// 	const user: string = data.user;

	// 	const batch = writeBatch(db);
	// 	const teamRef = doc(db, 'snh2023final', team);

	// 	batch.update(teamRef, {
	// 		arrived: true,
	// 		[user + '.status']: status,
	// 		[user + '.timestamp']: Timestamp.now(),
	// 		[user + '.scanned']: true,
	// 		[user + '_history']: arrayUnion({
	// 			status: status,
	// 			timestamp: Timestamp.now()
	// 		})
	// 	});

	// 	await batch.commit();
	// 	alert('Status updated');
	// }

	function onScanFailure(error: any) {
		console.warn(`Code scan error = ${error}`);
	}
</script>

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
			{#if info}
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
