import type { PageServerLoad, Actions } from './$types';
import { SECRET2 } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	return {
		secret: SECRET2
	};
};
