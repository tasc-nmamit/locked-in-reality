<script>
	let active = 0;
	const values = ['[S]', '<UEFI>', '<UEFI>', '<Disabled>', '<Enabled>'];
	const information = ['Test Value Hahah', 'second value', 'third value', 'fourth value', 'fifth value'];
	import { writable } from 'svelte/store';
	let showModal = writable(new Array(values.length).fill(false));

	import Modal from '$lib/components/LIR/Modal.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		//@ts-expect-error
		function handleKeyPress(event) {
			if ($showModal[active]) {
				return;
			}
			if (event.key === 'ArrowUp') {
				active = Math.max(active - 1, 0);
				updateActiveItem();
				return;
			} else if (event.key === 'ArrowDown') {
				active = Math.min(active + 1, values.length - 1);
				updateActiveItem();
				return;
			} else if (event.key === 'Enter') {
				$showModal[active] = true;
				const valueToCopy = information[active];
				navigator.clipboard
					.writeText(valueToCopy)
					.then(() => alert(`Value copied : ${valueToCopy}`))
					.catch((error) => console.error('Unable to copy value:', error));
				console.log('Enter');
				return;
			} else if (event.key === 'Escape') {
				window.location.href = '/serverRoom';
				return;
			}
		}

		// Add the event listener
		document.addEventListener('keyup', handleKeyPress);

		// Clean up by removing the event listener when the component is unmounted
		return () => {
			document.removeEventListener('keyup', handleKeyPress);
		};

		function updateActiveItem() {
			const items = document.querySelectorAll('.sysBoot');
			items.forEach((item, index) => {
				if (index === active) {
					item.classList.add('bg-black', 'font-normal', 'text-white');
				} else {
					item.classList.remove('bg-black', 'font-normal', 'text-white');
				}
			});
		}
	});
</script>

<section class="relative h-screen w-full bg-[#9c9a9d] font-IBM">
	{#if $showModal[active]}
		<Modal title="Function" arrValues={values} {showModal} curr={active} />
	{/if}
	<header class="flex h-[10%] w-full items-center justify-center bg-[#000069]">
		<div class="flex h-20 w-[99%] items-center justify-center border border-x-4 border-white">
			<h1 class="text-center text-4xl font-medium text-white">System Boot Time Out</h1>
		</div>
	</header>
	<body class="flex h-[74%] w-full flex-wrap bg-inherit text-3xl font-[600] tracking-normal text-black">
		<div class="flex basis-1/3 flex-col border p-10">
			<p>Functions</p>
			<p>Test</p>
			<p>BS</p>
			<p>SOme more BS</p>
			<p>BUBUBUB</p>
		</div>
		<div class="boot-options flex basis-1/3 flex-col border p-10">
			{#each values as key, index}
				<p class={`${active === index ? 'bg-black font-normal text-white' : ''} sysBoot`}>{key}</p>
			{/each}
		</div>
		<div class="flex basis-1/3 flex-col border p-10 text-[#000069]">
			<p>{information[active]}</p>
		</div>
	</body>
	<footer class="flex h-[16%] w-full items-center justify-center border bg-[#000069] text-white">
		<div class="flex h-32 w-[99%] items-center justify-center border border-x-4 border-white">
			<div class="flex h-[65%] w-full items-end justify-start gap-x-96 bg-black px-6">
				<p class="text-3xl tracking-widest">&#x2191&#x2193=Move Highlight</p>
				<p class="text-3xl tracking-widest">&ltEnter&gt=Complete Entry</p>
				<p class="text-3xl tracking-widest">ESC=Exit Entry</p>
			</div>
		</div>
	</footer>
</section>
