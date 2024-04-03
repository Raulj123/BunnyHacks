import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// false when user first loads up
export const goldenEgg1 = writable((browser && localStorage.getItem('goldenEgg1')) || 'false');
goldenEgg1.subscribe((val) => browser && (localStorage.goldenEgg1 = val));

export const goldenEgg2 = writable((browser && localStorage.getItem('goldenEgg2')) || 'false');
goldenEgg2.subscribe((val) => browser && (localStorage.goldenEgg2 = val));



export const bloom = writable((browser && localStorage.getItem('bloom')) || 'A4:2024');
bloom.subscribe((val) => browser && (localStorage.bloom = val));
