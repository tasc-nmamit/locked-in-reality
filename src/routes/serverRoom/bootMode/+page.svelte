<script lang="ts">
    import { onMount } from 'svelte';
	import BouncingDots from '../../chat/BouncingDots.svelte';
	
    let active = 0;
    let bootStatus = "Automatic";
    let textareaElement:HTMLTextAreaElement;
    let inputElement:HTMLInputElement;

    const changeFocus = (direction : string) => {
        if (direction === "ArrowDown") {
            inputElement.focus();
        } else {
            textareaElement.focus();
        }
    }

    onMount(() => {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault(); // Prevent default tab behavior
                changeFocus(event.key);
            } else if (event.key === 'Escape') {
                event.preventDefault();
                window.location.href = '/serverRoom';
            } else if (event.key === 'Tab' || event.key === 'F1' || event.key === 'F2' || event.key === 'F3' || event.key === 'F4' || event.key === 'F5' || event.key === 'F6' || event.key === 'F7' || event.key === 'F8' || event.key === 'F9' || event.key === 'F10' || event.key === 'F11' || event.key === 'F12') { 
                // prevent use of funtion keys to open dev tools or refresh the page
                event.preventDefault();
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
        <div class="w-full h-full">
            <div class="w-full flex flex-row justify-evenly mt-3">
                <h3>Boot status :</h3>
                <h3>{bootStatus}</h3>
            </div>
            <div class="w-full flex justify-center my-8">
                <h2>To unlock manual <u>Run the code</u></h2>
            </div>
            <div class="w-full h-auto flex flex-col justify-center items-center">
                <textarea id="terminal" cols="30" rows="14" bind:this={textareaElement} class="w-3/4 h-3/4 bg-black text-gray-200 resize-none"></textarea>
            </div>
            <!-- auth code -->
            <div class="w-full flex flex-row justify-evenly mt-12">
                <h3>Auth signature :</h3>
                <h3><input type="text" bind:this={inputElement} class="bg-[#9c9a9d]"/></h3>
            </div>
        </div>
	</body>
	<footer class="flex h-[16%] w-full items-center justify-center border bg-[#000069] text-white">
		<div class="flex h-32 w-[99%] items-center justify-center border border-x-4 border-white">
			<div class="flex h-[65%] w-full flex-col gap-x-96 bg-black px-6 text-nowrap justify-center">
                <div class="flex flex-row justify-between w-full mb-1">
                    <p class="text-3xl tracking-widest">&#x2191&#x2193=Change line</p>
                    <p class="text-3xl tracking-widest">&ltEnter&gt=Complete Entry</p>
                    <p class="text-3xl tracking-widest">ESC=Exit Entry</p>
                </div>
                <!-- <div class="flex flex-row justify-between w-full">
                    <p class="text-3xl tracking-widest">&ltTab&gt=Move Highlight</p>
                    <p></p>
                    <p></p>
                </div> -->
			</div>
		</div>
	</footer>
</section>

<style>
    textarea{
        caret: white;
    }
    input{
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
