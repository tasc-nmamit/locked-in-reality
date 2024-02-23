<script lang="ts">
	import { Button } from '$lib/components/ui/custom_button';
	import * as Table from '$lib/components/ui/table';
	import { db, user, userData } from '$lib/firebase/firebase';

	import { Timestamp, arrayUnion, collection, doc, getDoc, getDocs, increment, writeBatch } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let data = [];

	async function getData() {
		const teamCollectionRef = collection(db, 'lir');
		const docSnapshot = await getDocs(teamCollectionRef);
		const docs = docSnapshot.docs;
		data = docs.flatMap((doc) => doc.data());
		console.log(data);
	}
	const convertAndDownloadCSV = () => {
		if (data && data.length > 0) {
			// Create CSV headers
			const headers = ['Team Name', 'Leader Name', 'Leader Phone', 'Leader Email', 'Score', 'Time'].join(',') + '\n';
			// Convert data to CSV rows
			const csvRows = data.map((team) => {
				const row = [team.teamName, team.leaderName, team.leaderPhone, team.leaderEmail, team.score, team.time].join(',');
				return row;
			});

			// Combine headers and rows
			const csvContent = headers + csvRows.join('\n');

			// Trigger CSV download
			const blob = new Blob([csvContent], { type: 'text/csv' });
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = `LIRList.csv`;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		}
	};

	$: if ($user && $userData) {
		getData();
	}
</script>

<div class="flex flex-col items-center justify-center p-10 text-center">
	<h1 class="mb-10 text-3xl">Team Details</h1>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>S No.</Table.Head>
				<Table.Head>Team Name</Table.Head>
				<Table.Head>Leader Name</Table.Head>
				<Table.Head>Leader Phone</Table.Head>
				<Table.Head class="text-center">Leader Email</Table.Head>
				<Table.Head class="text-center">Team ID</Table.Head>
				<Table.Head class="text-center">Score</Table.Head>
				<Table.Head class="text-center">Time</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data as team, i}
				<Table.Row class="text-center">
					<Table.Cell>{i + 1}</Table.Cell>
					<Table.Cell>{team.teamName}</Table.Cell>
					<Table.Cell>{team.leaderName}</Table.Cell>
					<Table.Cell>{team.leaderPhone}</Table.Cell>
					<Table.Cell>{team.leaderEmail}</Table.Cell>
					<Table.Cell>{team.teamURL}</Table.Cell>
					<Table.Cell>{team.score}</Table.Cell>
					<Table.Cell>{team.time}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
<Button on:click={convertAndDownloadCSV} class="mx-auto flex">Download Report</Button>
