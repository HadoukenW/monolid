import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"14 дом ЖК Академ Риверсайд","description":"Ведутся работы по строительству дома, успевайте купить квартиру по выгодным ценам.","image":"/public/14 дом/MBxOAVByGW8.webp"};
				const file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/homepage/hero-8.md";
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
