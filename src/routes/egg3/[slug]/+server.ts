import { json } from '@sveltejs/kit';

export function GET({ params }) {
	const { slug } = params;
	if (slug == 'lake_bee') {
		let msg = `I accidentally sent the bee (API) to the wrong lake(${slug}) ... It needs to be at lake_goldenEgg. Could you correct the parameter and run the API again?`;
		return json(msg);
	} else if (slug == 'lake_goldenEgg') {
		let msg = '🐝: The golden egg will reach you at time 16:24!';
		return json(msg);
	} else {
		let msg = '🐝: Umm what are you on? Give me the correct params bruh 😡';
		return json(msg);
	}
}
