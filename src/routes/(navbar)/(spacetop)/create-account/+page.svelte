<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import UserDetailsForm from './user-details.svelte';
	export let data: PageData;
</script>

<div class="flex items-center justify-center">
	<div class="w-full max-w-lg pt-8">
		<Card.Header>
			<Card.Title>Enter your details</Card.Title>
			<!-- <Card.Description></Card.Description> -->
		</Card.Header>
		<Card.Content>
			<UserDetailsForm data={data.form} />
		</Card.Content>
	</div>
</div>
