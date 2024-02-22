<script lang="ts">
	export let message:string;
    export let title:string;
    let fallBackMessage = "Unable to convert Boot Mode";
</script>

<div class="absolute left-[50%] top-[50%] w-1/4 -translate-x-[50%] -translate-y-[50%] border-4 border-white bg-[#000069] p-6">
	<div class="flex flex-col justify-center">
		<h1 class="w-full text-center text-4xl text-white">{title}</h1>
		<hr class="h-[2px] w-full bg-white" />
		<div class="flex flex-col p-2 font-normal text-white">
			{#if message}
                <p class="text-center text-white">{message}</p>
            {:else}
                <p class="text-center text-white">{fallBackMessage}</p>
            {/if}
		</div>
	</div>
</div>
