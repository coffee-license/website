import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
	const url = 'https://raw.githubusercontent.com/coffee-license/license/main/2.0/LICENSE';
	return {
		license: fetch(url).then((res) => res.text())
	};
};
