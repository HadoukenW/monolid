import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Клевер","titleForLayots":"ЖК Клевер","description":"Lorem ipsum dolor sit amet","year":"2027","heroImage":"/public/ЖК Клевер/квартал 5.1/image-2.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Игровые площадки","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/ЖК Клевер/квартал 5.1/image-5.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Клевер/квартал 2.1/image-2.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Клевер/квартал 3.1/image-4.webp"}],"kvartal2N1":["/ЖК Клевер/квартал 2.1/image-1.webp","/ЖК Клевер/квартал 2.1/image-2.webp","/ЖК Клевер/квартал 2.1/image-3.webp","/ЖК Клевер/квартал 2.1/image-4.webp","/ЖК Клевер/квартал 2.1/image-5.webp"],"kvartal3N1":["/ЖК Клевер/квартал 3.1/image-1.webp","/ЖК Клевер/квартал 3.1/image-2.webp","/ЖК Клевер/квартал 3.1/image-3.webp","/ЖК Клевер/квартал 3.1/image-4.webp","/ЖК Клевер/квартал 3.1/image-5.webp"],"kvartal5N1":["/ЖК Клевер/квартал 5.1/image-1.webp","/ЖК Клевер/квартал 5.1/image-2.webp","/ЖК Клевер/квартал 5.1/image-3.webp","/ЖК Клевер/квартал 5.1/image-4.webp","/ЖК Клевер/квартал 5.1/image-5.webp"],"kvartalParkovka":["/ЖК Клевер/здание парковки/image-1.webp","/ЖК Клевер/здание парковки/image-2.webp","/ЖК Клевер/здание парковки/image-3.webp","/ЖК Клевер/здание парковки/image-4.webp","/ЖК Клевер/здание парковки/image-5.webp"],"galleryImages":["/ЖК Клевер/image-1.webp","/ЖК Клевер/klever-1.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3A62f6cad65625e6353ab9bf77cf0eb2922b2f7a5bd5caea85056d84f17775987c&amp;source=constructor"};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/zhk-klever.md";
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
