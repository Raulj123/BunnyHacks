<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let value1: any;
	let value2: any;
	let value3: any;
	let route: any;
	onMount(async () => {
		if (browser) {
			value1 = localStorage.getItem('goldenEgg1');
			value2 = localStorage.getItem('goldenEgg2');
			value3 = localStorage.getItem('goldenEgg3');
		}
	});

	page.subscribe(($page) => {
		route = $page.route.id;
	});
</script>

<div class="btm-nav" style="z-index: 1;">
	{#if value1 == 'true'}
		<a href="./" class:active={route == '/'}>1</a>
		<a href="./egg2" class:active={route == '/egg2'}>2</a>
	{/if}
	{#if value2 == 'true'}
		<a href="./egg3" class:active={route == '/egg3'}>3</a>
	{/if}
	{#if value3 == 'true' && value1 == 'true' && value2 == 'true'}
		<a href="./end" class:active={route == '/end'}>🎉</a>
	{/if}
</div>
