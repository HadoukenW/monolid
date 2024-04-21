import rss from '@astrojs/rss';
import { g as getCollection } from './index_Dc7jpuGN.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './contacts_BJwwj349.mjs';

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
