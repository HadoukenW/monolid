import rss from '@astrojs/rss';
import { g as getCollection } from './index_btoEHu1n.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './calc_CbucYD_O.mjs';

async function GET(context) {
	const posts = await getCollection('catalog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/catalog/${post.slug}`,
		})),
	});
}

export { GET };