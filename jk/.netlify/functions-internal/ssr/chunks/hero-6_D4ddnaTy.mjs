import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Жилой Комплекс Видный","description":"Ведутся работы по строительству комплекса, успевайте купить квартиру по выгодным ценам.","image":"/public/ЖК Видный/RU_-Lk7t8dc.webp"};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/homepage/hero-6.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };