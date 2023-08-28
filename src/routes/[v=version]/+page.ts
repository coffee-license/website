import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch, params }) => {
	const url = `https://raw.githubusercontent.com/coffee-license/license/main/${params.v}/LICENSE`;
	return {
		version: params.v,
		text: fetch(url).then((res) => res.text())
	};
};
