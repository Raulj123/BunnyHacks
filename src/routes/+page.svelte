<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { goldenEgg1 } from '$lib/manager';
	import Nav from '$lib/nav.svelte'

	console.log(
		"\r\n    .-''-.     ____       .-'''-. ,---------.    .-''-.  .-------.                .-''-.    .-_'''-.     .-_'''-.           .---.  .---.   ___    _ ,---.   .--.,---------. .---.         \r\n  .'_ _   \\  .'  __ `.   / _     \\\\          \\ .'_ _   \\ |  _ _   \\             .'_ _   \\  '_( )_   \\   '_( )_   \\          |   |  |_ _| .'   |  | ||    \\  |  |\\          \\\\   /         \r\n / ( ` )   '/   '  \\  \\ (`' )/`--' `--.  ,---'/ ( ` )   '| ( ' )  |            / ( ` )   '|(_ o _)|  ' |(_ o _)|  '         |   |  ( ' ) |   .'  | ||  ,  \\ |  | `--.  ,---'|   |         \r\n. (_ o _)  ||___|  /  |(_ o _).       |   \\  . (_ o _)  ||(_ o _) /           . (_ o _)  |. (_,_)/___| . (_,_)/___|         |   '-(_{;}_).'  '_  | ||  |\\_ \\|  |    |   \\    \\ /          \r\n|  (_,_)___|   _.-`   | (_,_). '.     :_ _:  |  (_,_)___|| (_,_).' __         |  (_,_)___||  |  .-----.|  |  .-----.        |      (_,_) '   ( \\.-.||  _( )_\\  |    :_ _:     v           \r\n'  \\   .---..'   _    |.---.  \\  :    (_I_)  '  \\   .---.|  |\\ \\  |  |        '  \\   .---.'  \\  '-   .''  \\  '-   .'        | _ _--.   | ' (`. _` /|| (_ o _)  |    (_I_)    _ _          \r\n \\  `-'    /|  _( )_  |\\    `-'  |   (_(=)_)  \\  `-'    /|  | \\ `'   /         \\  `-'    / \\  `-'`   |  \\  `-'`   |         |( ' ) |   | | (_ (_) _)|  (_,_)\\  |   (_(=)_)  (_I_)         \r\n  \\       / \\ (_ o _) / \\       /     (_I_)    \\       / |  |  \\    /           \\       /   \\        /   \\        /         (_{;}_)|   |  \\ /  . \\ /|  |    |  |    (_I_)  (_(=)_)        \r\n   `'-..-'   '.(_,_).'   `-...-'      '---'     `'-..-'  ''-'   `'-'             `'-..-'     `'-...-'     `'-...-'          '(_,_) '---'   ``-'`-'' '--'    '--'    '---'   (_I_)         \r\n                                                                                                                                                                                          \r\n"
	);
	console.log(
		'Your goal is to find the hidden %cgolden eggs %cyou do so by solving challenges!',
		'color: gold',
		'color: initial'
	);
	console.log(
		"Hint: Look for a hidden %c<p> %ctag with class '%chidden%c' in the DOM.",
		'color: lightskyblue',
		'color: inherit',
		'color: orange',
		'color: inherit'
	);

	export let data: PageData;
	let secret: any = null;
	let uniqueId = 'Egg1';

	onMount(async () => {
		({ secret } = data);
	});
	let secretCode = '';
	function egg1() {
		if (secretCode == secret) {
			showModal2();
		} else {
			showModal1();
		}
	}

	function showModal1() {
		let modal: any = document.getElementById('my_modal_1');
		modal.showModal();
	}

	function showModal2() {
		let modal: any = document.getElementById('my_modal_2');
		modal.showModal();
	}
	
	function collect() {
		goldenEgg1.set('true');
		window.location.href = 'egg2';
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

<div class="mobile hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="row flex flex-row justify-center">
				<div class="egg egg-left"></div>
				<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
				<div class="egg egg-right"></div>
			</div>

			<div class="wrapper mx-auto">
				<input
					bind:value={secretCode}
					type="text"
					class="input input-md input-bordered input-secondary pr-2"
					placeholder="Secret Code"
				/>
				<button type="submit" on:click={egg1}>Submit</button>
			</div>

			<div class="py-6">
				<p class="hidden">Your secret code is: {secret}</p>
				<div
					class="tooltip tooltip-bottom items-center justify-center"
					data-tip="Inspect your browser"
				>
					<p>Hint</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	::placeholder {
		color: #291334;
	}
</style>
