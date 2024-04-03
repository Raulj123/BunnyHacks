import type { PageServerLoad } from './$types';
import { SECRET3 } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	return {
		secret: SECRET3
	};
};
