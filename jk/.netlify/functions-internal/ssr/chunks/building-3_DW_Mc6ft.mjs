import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"image":"/public/ЖК Видный/RU_-Lk7t8dc.webp","title":"ЖК Видный","location":"Калининский","year":"2025","buildingType":"Монолитный","urlPath":"/catalog/zhk-vidniy"};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/newBuildings/building-3.md";
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
