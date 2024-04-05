<script lang="ts">
	import '../../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { goldenEgg3 } from '$lib/manager';
	import type { PageData } from './$types';
	import Nav from '$lib/nav.svelte';

	let value: any;
	let value1: any;
	let value2: any;
	let value3: any;
	let loading = true;
	let secret: any = null;
	let api1 = 'https://egghunt-rhome69.koyeb.app/egg3Hunt/lake_bee';
	const apiUrl = `https://egghunt-rhome69.koyeb.app/egg3Hunt/lake_bee`;
	let dataAPI: any;
	let msg: any;
	export let data: PageData;
	let guess: any;

	console.log(
		"Hint: You can run the %cAPI %chere! heres a clue %cfetch('https://api.example.com/data')",
		'color: lightskyblue',
		'color: inherit',
		'color: orange'
	);

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
		let modal: any = document.getElementById('my_modal_1');
		modal.showModal();
	}

	async function fetchAPI() {
		const res = await fetch(api1);
		dataAPI = await res.json();
		msg = dataAPI.message;
		let modal: any = document.getElementById('my_modal_2');
		modal.showModal();
	}

	function check() {
		if (guess == secret) {
			correct();
		} else {
			wrong();
		}
	}

	function correct() {
		let modal: any = document.getElementById('my_modal_3');
		modal.showModal();
	}

	function wrong() {
		let modal: any = document.getElementById('my_modal_4');
		modal.showModal();
	}

	function collect() {
		goldenEgg3.set('true');
		window.location.href = 'end';
	}
</script>

<Nav />

<dialog id="my_modal_4" class="modal">
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

<dialog id="my_modal_3" class="modal">
	<div class="modal-box">
		<div class="flex flex-row items-center">
			<h3 class="link-accent text-lg font-bold">Correct!</h3>
			<div class="eggG egg-gold mx-3"></div>
		</div>
		<div class="py-4">You collected all golden eggs!</div>
		<form method="dialog">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn" on:click={collect}>Collect</button>
		</form>
	</div>
</dialog>

<dialog id="my_modal_2" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="text-lg font-bold">🐝</h3>
		<div class="py-4">
			<p>
				{msg}
			</p>
			<p class="mt-4">
				Here is the API URL: <span class="link link-primary">{apiUrl}</span>
			</p>
		</div>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="my_modal_1" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="text-lg font-bold">Hi again!</h3>
		<div class="py-4">
			<div class="my-4">
				A <span class="link-accent">golden egg</span>! There it is, bobbing mysteriously in the
				water just out of reach. Problem is, <span class="link-error">you can't swim</span>. You
				wouldn't want to miss this opportunity, but waiting all day for the wind to blow it closer
				isn't ideal - you've got errands to run!
			</div>
			<div class="my-4">
				Luckily, you have a trusty worker bee 🐝<span class="link-primary">(API)</span> at your disposal
				that will tell you the time and day to show up!
			</div>
			<div class="my-4">
				<span class="link-primary">Your Mission:</span>
				Consult the bee API to see when the golden egg will be within your grasp.
			</div>

			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn">Close</button>
				</form>
			</div>
		</div>
	</div>
</dialog>
<div class="bg-indigo-100 h-screen">
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
				<div class="m-10 mx-auto" style="max-width:30%;">
					<button class="link-accent mx-auto w-full" on:click={fetchAPI}>Fetch API 🐝</button>
				</div>
				<div class="wrapper mx-auto mt-10">
					<input
						bind:value={guess}
						type="text"
						class="input input-md input-bordered input-secondary pr-2"
						placeholder="Time to come back"
					/>
					<button type="submit" on:click={check}>Submit</button>
				</div>
			</div>
			<div class="p-4 bg-indigo-100">
				<div class="relative p-4">
					<div class="water">
						<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
							<div class="eggG egg-gold mx-3"></div>
						</div>
					</div>
				</div>

				<div
					class="tooltip tooltip-bottom mx-auto mt-4 w-full"
					style="margin-bottom: 100px;"
					data-tip="JavaScript can run directly in your browser."
				>
					<p>Hint</p>
				</div>
			</div>
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
</div>
<style>
	img {
		width: 120px;
		height: 160px;
	}
	.water {
		background-color: #0077be;
		background: linear-gradient(to bottom, #0077be, #005599);
		height: 250px;
		width: 100%;
		border-top-left-radius: 50% 10%;
		border-top-right-radius: 50% 10%;
		animation: ripple 3s infinite alternate;
		box-shadow: 0 0 20px rgba(0, 0, 255, 0.3);
	}
	@keyframes ripple {
		0% {
			background-color: #0077be;
		}
		50% {
			background-color: #005599;
		}
		100% {
			background-color: #0077be;
		}
	}
</style>
