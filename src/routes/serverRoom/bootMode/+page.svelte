<script lang="ts">
	import { onMount } from 'svelte';
	import BouncingDots from '../../chat/BouncingDots.svelte';

	let active = 0;
	let bootStatus = 'Automatic';
	let focusOn = 'textarea';
	let textareaElement: HTMLTextAreaElement;
	let inputElement: HTMLInputElement;
	let textareaValue = '';

	function checkForSuccess() {
		const desiredString = `void runFn(){
    doSomething();
    return null;
}`;
		if (textareaValue.trim() === desiredString.trim()) {
			alert('Successful!');
		}
	}

    const changeFocus = () => {
        if (focusOn === "textarea") {
            focusOn = "authinput";
            inputElement.focus();
        } else {
            focusOn = "textarea";
            textareaElement.focus();
        }
    }

    onMount(() => {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                event.preventDefault(); // Prevent default tab behavior
                changeFocus();
            } else if (event.key === 'Escape') {
                event.preventDefault();
                window.location.href = '/serverRoom';
            }
        })
    })
/*

		function updateActiveItem() {
			const items = document.querySelectorAll('.boot-options p');
			items.forEach((item, index) => {
				if (index === active) {
					item.classList.add('bg-black', 'font-normal', 'text-white');
				} else {
					item.classList.remove('bg-black', 'font-normal', 'text-white');
				}
			});
		}

    */
</script>

<section class="h-screen w-full cursor-none bg-[#9c9a9d] font-IBM">
	<header class="flex h-[10%] w-full items-center justify-center bg-[#000069]">
		<div class="flex h-20 w-[99%] items-center justify-center border border-x-4 border-white">
			<h1 class="text-center text-4xl font-medium text-white">System Boot Time Out</h1>
		</div>
	</header>
	<body class="flex h-[74%] w-full flex-wrap bg-inherit text-3xl font-[600] tracking-normal text-black">
		<div class="h-full w-full">
			<div class="mt-3 flex w-full flex-row justify-evenly">
				<h3>Boot status : {bootStatus}</h3>
			</div>
			<div class="my-8 flex w-full justify-center">
				<h2>To unlock manual <u>Run the code</u></h2>
			</div>
			<div class="flex h-auto w-full flex-col items-center justify-center">
				<textarea id="terminal" cols="30" rows="14" bind:value={textareaValue} bind:this={textareaElement} on:input={checkForSuccess} class="h-3/4 w-2/4 resize-none bg-black font-normal"></textarea>
			</div>
			<!-- auth code -->
			<div class="mt-12 flex w-full flex-row justify-center">
				<h3>Auth signature :</h3>
				<h3><input type="text" bind:this={inputElement} class="bg-black px-2 py-1 font-normal text-white" /></h3>
			</div>
		</div>
	</body>
	<footer class="flex h-[16%] w-full items-center justify-center border bg-[#000069] text-white">
		<div class="flex h-32 w-[99%] items-center justify-center border border-x-4 border-white">
			<div class="flex h-[65%] w-full flex-col gap-x-96 bg-black px-6 text-nowrap">
                <div class="flex flex-row justify-between w-full mb-1">
                    <p class="text-3xl tracking-widest">&#x2191&#x2193=Change line</p>
                    <p class="text-3xl tracking-widest">&ltEnter&gt=Complete Entry</p>
                    <p class="text-3xl tracking-widest">ESC=Exit Entry</p>
                </div>
                <div class="flex flex-row justify-between w-full">
                    <p class="text-3xl tracking-widest">&ltTab&gt=Move Highlight</p>
                    <p></p>
                    <p></p>
                </div>
			</div>
		</div>
	</footer> -->
</section>

<style>
	textarea {
		caret: white;
	}
	input {
		caret: black;
		outline: none;
	}

	#terminal {
		background-color: #000000;
		color: #eeeeec;
		border: none;
		padding: 10px;
		overflow: auto;
		scrollbar-width: none;
	}

	textarea::-webkit-scrollbar {
		display: none; /* For Chrome, Safari and Opera */
	}
</style>
