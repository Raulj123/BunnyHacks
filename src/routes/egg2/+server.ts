import { json } from '@sveltejs/kit';

export function GET() {
	let hint = {
		message:
			"Oh no! It seems that watering the eggs accidentally washed the code into Local Storage! Look for a key that rhymes with 'gloom' – the value of that key is your code!",
		secretCode: '🌊'
	};

	return json(hint);
}
