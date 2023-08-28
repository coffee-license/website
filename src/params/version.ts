import { VERSIONS } from '$lib/versions';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return VERSIONS.includes(param);
};
