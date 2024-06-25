import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-malevich","title":"ЖК Малевич","city":"в городе Челябинск","titleForLayots":"данной квартире в ЖК Малевич","description":"Жилой комплекс «Малевич» расположен в историческом районе Челябинска и является примером современной архитектуры, сочетающей функциональность и стиль.","year":"2026","heroImage":"/public/малевич/357.webp","location":"ЧТЗ","buildingType":"Кирпично-монолитный","aboutSectionData":[{"title":"Перспективный район","text":"Откройте для себя перспективный район с хорошей транспортной развязкой и развивающейся инфраструктурой","image":"/малевич/luxury-terrace-4-scaled 1.webp"},{"title":"Безопасный и продуманный двор","text":"Закрытая территория, консьерж, система контроля доступа.","image":"/малевич/2024-03-22_12-15-30_.webp"},{"title":"Колясочные и велосипедные комнаты","text":"Просторные колясочные комнаты и места хранения велосипедов и самокатов с системой контроля доступа.","image":"/малевич/2024-03-22_12-11-20.webp"}],"galleryImages":["/малевич/2024-03-22_12-12-38.webp","/малевич/2024-03-22_12-11-20.webp","/малевич/download.webp","/малевич/2024-03-19_10-04-47.webp","/малевич/2024-03-19_10-07-31.webp","/малевич/2024-03-22_12-14-50.webp","/малевич/2024-03-22_12-15-30_.webp","/малевич/2024-03-22_12-22-24.webp","/малевич/2024-03-22_12-23-04.webp","/малевич/professional_photo_o 1.webp","/малевич/photo_2024-04-10_14-46-41.webp","/малевич/f9f2aca8a6245650bec4.jpg.webp","/малевич/luxury-terrace-4-scaled 1.webp","/малевич/357.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A070ab4b70d1a4af0c8d787d92174fb32b6ee689b02b81821bbd5dc542a728b40&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A070ab4b70d1a4af0c8d787d92174fb32b6ee689b02b81821bbd5dc542a728b40&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-malevich.md";
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
