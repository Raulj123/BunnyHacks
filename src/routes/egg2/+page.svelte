<script lang="ts">
	import '../../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
    
	let value: any;
	let loading = true;
    let gridSize = { rows: 4, cols: 10 };

	onMount(async () => {
		if (browser) {
			value = localStorage.getItem('goldenEgg1');
			loading = false;
		}
	});

    function bunny(){
        let modal: any = document.getElementById('my_modal_4');
		modal.showModal();
    }

</script>

<dialog id="my_modal_4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Talking Bunny here!</h3>
    <p class="py-4">
        Unfortunately, all the eggs have been accidentally painted the same pattern! 
        Among the identical eggs lies the elusive <span class="link-accent">golden egg</span>.
        Each egg has a unique <span class="link-primary">location</span> and requires a specific <span class="link-primary">lock code</span> for access. 
        <span class="link-primary">'Water'</span> the eggs to reveal their hints. 
        Keep an eye on the <span class="link-secondary">networks tab</span> for the secret code, unlocking the golden egg's whereabouts. 
        Happy hunting!"
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
	<div class="mobile py-10 flex flex-row justify-center">
		
		<a href="./">
			<h1 class="hero- text-5xl font-bold">Easter <span class="E">Egg</span> Hunt!</h1>
		</a>
		
	</div>

	{#if value == 'true'}
		<div class="flex justify-center">
			<ul class="steps">
				<li class="step step-accent"><div class="eggG egg-gold mx-3"></div></li>
				<li class="step"></li>
				<li class="step"></li>
			</ul>
		</div>
        <div class="text-center py-10">
            <div class="mx-auto">
                <div class="flex flex-row items-start main justify-center">
                    <button on:click={bunny}>
                    <img src="./eggs/full_bunny.svg"  alt="char">
                </button>
                <div class="chat chat-start">
                    <div class="chat-bubble chat-bubble-primary">Psssss! Click me</div>
                  </div>
                  <div class="grid m-10 max-w-full">
					{#each Array(gridSize.rows) as _, row}
						<div class="row w-full flex flex-wrap justify-between">
							{#each Array(gridSize.cols) as _, col}
							<img src="./eggs/egg.svg"alt="egg">
							{/each}
						</div>
					{/each}
				</div>
				
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

<style>
	.egg {
		width: 50px;
		height: 70px;
	

	}
	.row img {
		width: 50px;
		height: 50px;
		margin: 10px;
	}
    img {
        width: 120px;
        height: 160px;
    }
    
    
    .grid {
		width: 55% !important;
		border: 2px solid brown;
		border-radius: 10px;
        padding: 20px; 
        background-color: #6a9846; 
    }
	@media only screen and (max-width: 480px) {
    .egg {
        width: 45px;
		height: 70px;
		margin: 10px;
		margin-bottom: 10px;
    }
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
	

}
</style>
