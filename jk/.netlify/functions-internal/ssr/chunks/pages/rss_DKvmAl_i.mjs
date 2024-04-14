import rss from '@astrojs/rss';
import { g as getCollection } from './index_CknJCFpB.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './calc_DWMMsiLd.mjs';

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
