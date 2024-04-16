import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Видный","titleForLayots":"ЖК Видный","description":"Lorem ipsum dolor sit amet","year":"2025","heroImage":"/public/ЖК Видный/RU_-Lk7t8dc.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Игровые площадки","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/ЖК Видный/j_8EAYYU0VU.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Видный/QYDnP9QCpyg.webp"}],"layoutsSectionData":[{"title":"студия","image":"/ЖК Видный/layout-1.webp"},{"title":"студия","image":"/ЖК Видный/layout-2.webp"},{"title":"студия","image":"/ЖК Видный/layout-3.webp"},{"title":"студия","image":"/ЖК Видный/layout-4.webp"},{"title":"студия","image":"/ЖК Видный/layout-5.webp"},{"title":"студия","image":"/ЖК Видный/layout-6.webp"},{"title":"студия","image":"/ЖК Видный/layout-7.webp"},{"title":"студия","image":"/ЖК Видный/layout-8.webp"}],"galleryImages":["/ЖК Видный/j_8EAYYU0VU.webp","/ЖК Видный/QYDnP9QCpyg.webp","/ЖК Видный/RU_-Lk7t8dc.webp","/ЖК Видный/-DoMQhYsHYI.webp","/ЖК Видный/jiPBentvc8w.webp","/ЖК Видный/MjxPsqLPIZs 1.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3A99bfa1eb05cb51a7b232ff0c70919b7ef93b38a69c58524f96e0b92906f4582f&amp;source=constructor"};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/zhk-vidniy.md";
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
