<script lang="ts">
	import '../../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	let value: any;
	let loading = true;
	onMount(async () => {
		if (browser) {
			value = localStorage.getItem('goldenEgg1');
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="mx-auto flex justify-center py-10">
		<p class="text-3xl">
			Loading..<span class="loading loading-spinner loading-lg text-secondary"></span>
		</p>
	</div>
{:else}
	<div class="mx-auto flex justify-center py-8">
		<div class="egg egg-left"></div>
		<a href="./">
			<h1 class="m-5 text-4xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
		</a>
		<div class="egg egg-right"></div>
	</div>

	{#if value == 'true'}
		<div class="flex justify-center">
			<ul class="steps">
				<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				<li class="step"></li>
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

<style>
	.egg {
		width: 50px;
		height: 70px;
	}
	.egg-left {
		margin: 0;
	}
	.egg-right {
		margin: 0;
	}
</style>
