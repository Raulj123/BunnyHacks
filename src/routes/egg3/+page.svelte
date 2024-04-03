<script lang="ts">
import '../../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { goldenEgg2 } from '$lib/manager';
	import type { PageData } from './$types';
    import Nav from '$lib/nav.svelte'

    let value:any;
    let value1:any;
    let value2:any;
    let loading = true;
    
    

    onMount(async () => {
		if (browser) {
			value1 = localStorage.getItem('goldenEgg1');
            value2 = localStorage.getItem('goldenEgg2');
            
            if (value1 =='true' && value2 =='true'){
                value = true;
            }
			loading = false;
		}
		
	});

	
</script>
<Nav />
{#if loading}
	<div class="mx-auto flex justify-center py-10">
		<p class="text-3xl">
			Loading..<span class="loading loading-spinner loading-lg text-secondary"></span>
		</p>
	</div>
{:else}

	<div class="mobile py-10 flex flex-row justify-center">
		
		<a href="./">
			<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
		</a>
		
	</div>

	{#if value == true}
		<div class="flex justify-center">
			<ul class="steps">
				<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				<li class="step"></li>
			</ul>
		</div>
        
      

	{:else}
		<div role="alert" class="alert alert-error mx-auto w-80">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>You must collect the first gold egg! </span>
		</div>
	{/if}
{/if}
