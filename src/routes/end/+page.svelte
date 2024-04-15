<script lang="ts">
	import '../../app.css';
	import Nav from '$lib/nav.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let value: any;
	let v1: any;
	let v2: any;
	let v3: any;
	let loading = true;

	onMount(async () => {
		if (browser) {
			v1 = localStorage.getItem('goldenEgg1');
			v2 = localStorage.getItem('goldenEgg2');
			v3 = localStorage.getItem('goldenEgg3');

			if (v1 == 'true' && v2 == 'true' && v3 == 'true') {
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
{:else if value == true}
	<div class="mobile hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<div class="row flex flex-row justify-center">
					<div class="egg egg-left"></div>
					<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
					<div class="egg egg-right"></div>
				</div>
				<h2 class="text-3xl">
					🎉 Congratulations! You've found all three <span class="link-accent">golden eggs </span>!
					🎉
				</h2>
				<div class="mt-10">
					<a href="https://github.com/Raulj123/BunnyHacks" class="link link-accent">Source code</a>
				</div>
			</div>
		</div>
	</div>
	<img
		style="position: absolute; bottom: 0; width: 100%; height: 200px;"
		src="./eggs/grass.png"
		alt="grass"
	/>
{:else}
	<div role="alert" class="alert alert-error mx-auto mt-10 w-80">
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
