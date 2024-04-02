import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// false when user first loads up
export const goldenEgg1 = writable((browser && localStorage.getItem('goldenEgg1')) || 'false');
goldenEgg1.subscribe((val) => browser && (localStorage.goldenEgg1 = val));
