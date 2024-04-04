<script lang="ts">
	import '../../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { goldenEgg2 } from '$lib/manager';
	import type { PageData } from './$types';
	import Nav from '$lib/nav.svelte';

	console.log(
		'Go look at the %cresponse! You might want to water your eggs with the network tab open',
		'color: gold'
	);

	export let data: PageData;
	let secret: any = null;
	let value1: any;
	let value: any;
	let value2: any;
	let value3: any;
	let loading = true;
	let gridSize = { rows: 4, cols: 5 };
	let clue = 'https://egghunt-rhome69.koyeb.app/egg2Hunt';
	let secretCode: any;

	onMount(async () => {
		if (browser) {
			value1 = localStorage.getItem('goldenEgg1');
			value2 = localStorage.getItem('goldenEgg2');
			value3 = localStorage.getItem('goldenEgg3');

			if (value1 == 'true') {
				value = true;
			}
			loading = false;
		}
		({ secret } = data);
	});

	function bunny() {
		let modal: any = document.getElementById('my_modal_4');
		modal.showModal();
	}

	async function rain() {
		const res = await fetch(clue);
		const secret = await res.json();
		let modal: any = document.getElementById('my_modal_5');
		modal.showModal();
	}

	function egg2() {
		if (secretCode == secret) {
			showModal2();
		} else {
			showModal1();
		}
	}
	function showModal2() {
		let modal: any = document.getElementById('my_modal_2');
		modal.showModal();
	}
	function showModal1() {
		let modal: any = document.getElementById('my_modal_1');
		modal.showModal();
	}

	function collect() {
		goldenEgg2.set('true');
		window.location.href = 'egg3';
	}
</script>

<Nav />

<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<h3 class="link-error text-lg font-bold">Wrong!</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="my_modal_2" class="modal">
	<div class="modal-box">
		<div class="flex flex-row items-center">
			<h3 class="link-accent text-lg font-bold">Correct!</h3>
			<div class="eggG egg-gold mx-3"></div>
		</div>
		<div class="py-4">You collected a golden egg, collect all 3 to win!</div>
		<form method="dialog">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn" on:click={collect}>Collect</button>
		</form>
	</div>
</dialog>

<dialog id="my_modal_5" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="text-lg font-bold">💧💧💧💧💧💧💧💧</h3>
		<p class="py-4">
			Your eggs have been watered! 🌧️ Go check the <span class="link-accent">networks tab</span> for
			a clue! 🕵️‍♂️
		</p>
		<p>(You might want to water your eggs with the network tab open)</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="text-lg font-bold">Talking Bunny here!</h3>
		<p class="py-4">
			Unfortunately, all the eggs have been accidentally painted the same pattern! Among the
			identical eggs lies the elusive <span class="link-accent">golden egg</span>. Each egg has a
			unique <span class="link-primary">location</span> and requires a specific
			<span class="link-primary">lock code</span>
			for access.
			<span class="link-primary">'Water'</span> the eggs to reveal their hints. Keep an eye on the
			<span class="link-secondary">networks tab</span> for the secret code, unlocking the golden egg's
			whereabouts. Happy hunting!"
		</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

{#if loading}
	<div class="mx-auto flex justify-center py-10">
		<p class="text-3xl">
			Loading..<span class="loading loading-spinner loading-lg text-secondary"></span>
		</p>
	</div>
{:else}
	<div class="mobile flex flex-row justify-center py-10">
		<a href="./">
			<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
		</a>
	</div>

	{#if value == true}
		<div class="flex justify-center">
			<ul class="steps">
				<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				{#if value2 == 'true'}
					<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				{:else}
					<li class="step"></li>
				{/if}
				{#if value3 == 'true'}
					<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				{:else}
					<li class="step"></li>
				{/if}
			</ul>
		</div>

		<div class="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
			<div class="p-4">
				<div class="flex flex-row">
					<button on:click={bunny}>
						<img src="./eggs/full_bunny.svg" alt="char" />
					</button>
					<div class="chat chat-start">
						<div class="chat-bubble chat-bubble-primary">Psssss! Click me</div>
					</div>
				</div>
				<div class="m-10 mx-auto" style="max-width: 30%;">
					<button class="link-primary mx-auto w-full" on:click={rain}>Water Eggs!</button>
				</div>
				<div class="wrapper mx-auto mt-5">
					<input
						bind:value={secretCode}
						type="text"
						class="input input-md input-bordered input-secondary pr-2"
						placeholder="Secret code"
					/>
					<button type="submit" on:click={egg2}>Submit</button>
				</div>
			</div>
			<div class="p-4">
				<div class="mt-5 grid grid-cols-5 gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
					{#each Array(gridSize.rows) as _, row}
						{#each Array(gridSize.cols) as _, col}
							<div class="p-4">
								<img class="eggI" src="./eggs/egg.svg" alt="egg" />
							</div>
						{/each}
					{/each}
				</div>
			</div>
		</div>

		<!-- <div class="py-2 text-center">
			<div class="mx-auto">
				<div class="main flex flex-row items-start justify-center">
					<button on:click={bunny}>
						<img src="./eggs/full_bunny.svg" alt="char" />
					</button>
					<div class="chat chat-start">
						<div class="chat-bubble chat-bubble-primary">Psssss! Click me</div>
					</div>

					<div class="m-10 gridE max-w-full">
						{#each Array(gridSize.rows) as _, row}
							<div class="row flex w-full flex-wrap justify-between">
								{#each Array(gridSize.cols) as _, col}
									<img src="./eggs/egg.svg" alt="egg" />
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<div
				class="flex flex-row flex-wrap items-center justify-center text-center"
				style="margin-bottom: 100px;"
			>
				<div class="inline-block">
					<button class="btt btn btn-primary" on:click={rain}>Water Eggs!</button>
				</div>
				<div class="wrapper mx-auto">
					<input
						bind:value={secretCode}
						type="text"
						class="input input-md input-bordered input-secondary pr-2"
						placeholder="Secret Code"
					/>
					<button type="submit" on:click={egg2}>Submit</button>
				</div>
			</div>
		</div> -->
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
	.row img {
		width: 50px;
		height: 50px;
		margin: 10px;
	}
	.eggI {
		width: 50px;
		height: 100px;
	}
	img {
		width: 120px;
		height: 160px;
	}

	.gridE {
		width: 55% !important;
		border: 2px solid brown;
		border-radius: 10px;
		padding: 20px;
		background-color: #6a9846;
	}

	@media only screen and (max-width: 480px) {
		.hero- {
			font-size: x-large;
		}
		.mobile {
			display: flex;
			justify-content: center;
			text-align: center;
		}
		.main {
			flex-wrap: wrap;
		}
		.btt {
			margin-bottom: 10px;
		}
		.wrapper {
			width: 100%;
		}

		.grid {
			width: 100% !important;
		}
	}
</style>
