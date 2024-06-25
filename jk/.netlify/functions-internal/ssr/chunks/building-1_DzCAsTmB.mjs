import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"image":"/public/Бр Кашириных/iuUW9StK_5Q.webp","title":"ЖК Бр Кашириных 102 / 98 А","location":"Калининский","year":"2024","buildingType":"Монолитный","urlPath":"/catalog/zhk-bratiev-kashirinyh"};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/newBuildings/building-1.md";
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
