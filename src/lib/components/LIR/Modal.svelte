<script lang="ts">
	import { onMount } from 'svelte';

	export let title = 'Function';
	export let arrValues = ['[S]', '<UEFI>', '<UEFI>', '<Disabled>', '<Enabled>'];
	export let showModal;
	export let curr: number;

	onMount(() => {
		document.addEventListener('keydown', function (event) {
			if (event.key === 'ArrowUp') {
				active = Math.max(active - 1, 0);
				updateActiveItem();
			} else if (event.key === 'ArrowDown') {
				active = Math.min(active + 1, arrValues.length - 1);
				updateActiveItem();
			} else if (event.key === 'Enter') {
				console.log('Enter');
			} else if (event.key === 'Escape') {
				$showModal[curr] = false;
			}
		});

		function updateActiveItem() {
			const items = document.querySelectorAll('.modalItem');
			items.forEach((item, index) => {
				if (index === active) {
					item.classList.add('bg-black', 'font-normal', 'text-white');
				} else {
					item.classList.remove('bg-black', 'font-normal', 'text-white');
				}
			});
		}

		return () => {
			document.removeEventListener('keydown', function (event) {
				if (event.key === 'ArrowUp') {
					active = Math.max(active - 1, 0);
					updateActiveItem();
				} else if (event.key === 'ArrowDown') {
					active = Math.min(active + 1, arrValues.length - 1);
					updateActiveItem();
				} else if (event.key === 'Enter') {
				} else if (event.key === 'Escape') {
					$showModal[curr] = false;
				}
			});
		};
	});

	let active = 0;
</script>

<div class="absolute left-[50%] top-[50%] w-1/4 -translate-x-[50%] -translate-y-[50%] border-4 border-white bg-[#000069] p-6">
	<div class="flex flex-col justify-center">
		<h1 class="w-full text-center text-4xl text-white">{title}</h1>
		<hr class="h-[2px] w-full bg-white" />
		<div class="flex flex-col p-2 font-normal text-white">
			{#each arrValues as key, index}
				<p class={`${active === index ? 'bg-black font-normal text-white' : ''} modalItem`}>{key}</p>
			{/each}
		</div>
	</div>
</div>
