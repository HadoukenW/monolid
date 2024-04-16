import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Жилой Комплекс Клевер","description":"Ведутся работы по строительству 2 последних домов района, успевайте купить квартиру по выгодным ценам.","image":"/public/ЖК Клевер/квартал 5.1/image-2.webp"};
				const file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/homepage/hero-1.md";
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
