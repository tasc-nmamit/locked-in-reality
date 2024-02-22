<script lang="ts">
	let active = 0;
	const values = ["[Main]" , "[Advanced]" , "<Cooling Configuration>"];
	const information = ['All functions on Video BIOS', 'Advanced Video options', 'Cooling settings for the server'];
	let showModal = writable(new Array(values.length).fill(false));
	
	import { writable } from 'svelte/store';
	import Modal from '$lib/components/LIR/Modal.svelte';
	import { onMount } from 'svelte';
	import { randomMessage } from '../randomMessage';

	const modalOptions = [
  {
    "[Main]" : [
      {
        "<Information>" : [
          { "<System Summary>" : []},
          "Component Information"
        ]
      },
      {
        "<Configuration>" : [
          {
            "<System Configuration>" : [
              "System Settings",
              {"<Advanced Settings>" : []}
            ]
          },
          {
            "<Peripheral Configuration>" : [
              {"<Video Output>" : []},
              "CUDA Processing"
            ]
          }
        ]
      },
      {"<Boot>": []}
    ]
  },
  {
    "[Advanced]" : [
      {
        "<i-GPU Configuration>" : [
          {"<Video Memory>" : ["1024" , "2048" , "3072" , "4096" , {"<Custom Value>" : []} , "[No Limit]"] },
          {"<Overclocking>" : ["Memory Overclocking","Frequency overclocking"] }
        ]
      },
      {
        "<Memory Configuration>" : [
          {"[Memory Settings]" : [{"<Custom Memory>": []} , "Auto memory allocation"] },
          { "<XMP Profile>" : "XMP Profile information" }
        ]
      },
	  {
        "<Dedicated GPU Configuration>" : [
          {"<Video Memory>" : ["1024" , "2048" , "3072" , "4096" , {"<Custom Value>" : []} , "No Limit"] },
          {"<Overclocking>" : ["Memory Overclocking","Frequency overclocking"] }
        ]
      }
    ]
  },
  {
	"<Cooling Configuration>" : [
		{"<Fan Configuration>" : ["Auto" ,{ "[Manual]":[]}] },
		{"<Fan Speed>" : ["Low" , "Medium" , "High" , {"<custom>" : []}] },
		{"<Fan Curve>" : [{"[Custom]" : []}, "Predefined" , "profile 1" , "profile 2"] },
		{"<Temperature>" : ["Celsius" , "Fahrenheit" , "Kelvin" , {"<custom>" : []}] },
	],
  }
  // Add more sections as needed
];
  	// @ts-expect-error
	let modalStack = [] // contains objects of modal options

	let showPopUp = false;

	onMount(() => {
		//@ts-expect-error
		function handleKeyPress(event) {
			event.preventDefault();
			if (event.key === 'Escape') {
				if ($showModal[active] === true){
					// @ts-ignore
					modalStack.pop();
					if (modalStack.length > 0) {
						// @ts-ignore
						currentModal = modalStack[modalStack.length - 1];
					} else if (modalStack.length === 0) {
						$showModal[active] = false;
					}
					modalIndex = 0;
					modalZIndex -= 1
				} else {
					window.location.href = '/serverRoom';
				}
			} else if (event.key === 'ArrowUp') {
				if ($showModal[active]) {
					modalIndex = Math.max(modalIndex - 1, 0);
				} else {
					active = Math.max(active - 1, 0);
					updateActiveItem();
				}
			} else if (event.key === 'ArrowDown') {
				if ($showModal[active]) {
					modalIndex = Math.min(modalIndex + 1, arrValues.length - 1);
				} else {
					active = Math.min(active + 1, values.length - 1);
					updateActiveItem();
				}
			} else if (event.key === 'Enter') {
				if ($showModal[active]) {
					if (typeof(tempArrValues[modalIndex]) === 'object') {
						// @ts-ignore
						modalStack.push(tempArrValues[modalIndex]);
						// @ts-ignore
						currentModal = tempArrValues[modalIndex];
					} else if (typeof(tempArrValues[modalIndex]) === 'string') {
						// do nothing just copy the  value
						copyToClipBoard();
					}
					modalZIndex += 1;
					modalIndex = 0;
				} else // @ts-ignore
				{
					modalStack.push(modalOptions[active])
					$showModal[active] = true;
				}		
			}
		}

		// copy function
		function copyToClipBoard () {
			const valueToCopy = randomMessage();
				navigator.clipboard
					.writeText(valueToCopy)
					.then(() => {
						showPopUp = true;
						setTimeout(()=>{
							showPopUp = false;
						},1000)
					}) // value not shown cuz let the players navigate multiple times in search of the code
					.catch((error) => console.error('Unable to copy value:', error));
		}

		// Add the event listener
		document.addEventListener('keydown', handleKeyPress);

		// Clean up by removing the event listener when the component is unmounted
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
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

	// states to keep track of the modal
	let modalZIndex = 0
	let modalIndex = 0
	$: currentModal = modalOptions[active]
	$: title= Object.keys(currentModal)[0]
	$: tempArrValues = Object.values(currentModal)[0]
	$: arrValues = updateArrValues(tempArrValues)

	/**
	 * @param {string | any[]} tempArrValues
	 */
	function updateArrValues(tempArrValues: string | any[]) {
		let arrValues = [];
		for (let i = 0; i < tempArrValues.length; i++) {
			if (typeof(tempArrValues[i]) === 'object') {
				arrValues.push(Object.keys(tempArrValues[i])[0]);
			} else if (typeof(tempArrValues[i]) === 'string') {
				arrValues.push(tempArrValues[i]);
			}
		}
		return arrValues;
	}
</script>

<section class="relative h-screen w-full bg-[#9c9a9d] font-IBM cursor-none">
	{#if $showModal[active]}
		{#if modalStack.length > 0}
			<Modal title={title} arrValues={arrValues} {showModal} message={"LOL you are not authorized to change it"} curr={active} />
		{/if}
	{/if}
	{#if showPopUp}		
		<Modal title={title} arrValues={[]} {showModal} message={"Value copied"} curr={active} />
	{/if}
		<header class="flex h-[10%] w-full items-center justify-center bg-[#000069]">
		<div class="flex h-20 w-[99%] items-center justify-center border border-x-4 border-white">
			<h1 class="text-center text-4xl font-medium text-white">Video BIOS</h1>
		</div>
	</header>
	<body class="flex h-[74%] w-full flex-wrap bg-inherit text-3xl font-[600] tracking-normal text-black">
		<div class="flex basis-1/3 flex-col p-10 gap-y-4">
			<p>Video BIOS</p>
			<p>Advanced</p>
			<p>Cooling Configuration</p>
		</div>
		<div class="boot-options flex basis-1/3 flex-col gap-y-4 p-10">
			{#each values as key, index}
				<p class={`${active === index ? 'bg-black font-normal text-white' : ''} sysBoot`}>{key}</p>
			{/each}
		</div>
		<div class="flex basis-1/3 flex-col p-10 text-[#000069]">
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
