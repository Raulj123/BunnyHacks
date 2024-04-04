<script lang="ts">
	import '../../app.css';
	import Nav from '$lib/nav.svelte';
</script>

<Nav />

<div class="mobile hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="row flex flex-row justify-center">
				<div class="egg egg-left"></div>
				<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
				<div class="egg egg-right"></div>
			</div>
			<h2 class="text-3xl">
				🎉 Congratulations! You've found all three <span class="link-accent">golden eggs</span>! 🎉
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

<style>
	.egg-gold {
		position: absolute;
		bottom: 0;
	}
</style>
