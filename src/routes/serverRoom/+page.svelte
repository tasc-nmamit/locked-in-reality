<script lang="ts">
	let active = 0;
	const values = ['<UEFI>', '<UEFI>', '<UEFI>', '<UEFI>', '<Disabled>'];
	const information = ['Options regarding System Boot time manipulation', 'Change Boot mode', 'Video graphic processing settings', 'Administrative Boot logs', 'Select the boot priority for USB devices'];
	const urls = ['/serverRoom/systemBootTimeOut', '/serverRoom/bootMode', '/serverRoom/videoBios', '/serverRoom/bootOptionRetry', '/serverRoom/usbBootPriority'];
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('keydown', (event) => {
			keyEvent(event);
		});

		function keyEvent (event : any) {
			if (event.key === 'ArrowUp') {
				active = Math.max(active - 1, 0);
				updateActiveItem();
			} else if (event.key === 'ArrowDown') {
				active = Math.min(active + 1, values.length - 1);
				updateActiveItem();
			} else if (event.key === 'Enter') {
				const url = urls[active];
				window.location.href = url;
			} else {
				event.preventDefault();
			}
		}

		function updateActiveItem() {
			const items = document.querySelectorAll('.mainLayout');
			items.forEach((item, index) => {
				if (index === active) {
					item.classList.add('bg-black', 'font-normal', 'text-white');
				} else {
					item.classList.remove('bg-black', 'font-normal', 'text-white');
				}
			});
		}

		return () => {
			document.removeEventListener('keydown', keyEvent);
		};
	});
</script>

<section class="h-screen w-full cursor-none bg-[#9c9a9d] font-IBM">
	<header class="flex h-[10%] w-full items-center justify-center bg-[#000069]">
		<div class="flex h-20 w-[99%] items-center justify-center border border-x-4 border-white">
			<h1 class="text-center text-4xl font-medium text-white">Advanced Boot Options</h1>
		</div>
	</header>
	<body class="flex h-[74%] w-full flex-wrap bg-inherit text-3xl font-[600] tracking-normal text-black">
		<div class="flex basis-1/3 flex-col border p-10">
			<p>System Boot Time out</p>
			<p>Boot Mode</p>
			<p>Video BIOS</p>
			<p>Boot Option Retry</p>
			<p>USB Boot Priority</p>
		</div>
		<div class="boot-options flex basis-1/3 flex-col border p-10">
			{#each values as key, index}
				<p class={`${active === index ? 'bg-black font-normal text-white' : ''} mainLayout`}>{key}</p>
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
