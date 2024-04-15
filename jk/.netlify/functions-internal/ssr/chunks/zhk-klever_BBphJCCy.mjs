import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Клевер","titleForLayots":"ЖК Клевер","description":"Lorem ipsum dolor sit amet","year":"2027","heroImage":"/public/ЖК Клевер/квартал 3.1/image-2.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Игровые площадки","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/ЖК Клевер/квартал 2.1/image-1.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Клевер/квартал 2.1/image-2.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Клевер/квартал 2.1/image-3.webp"}],"layoutsSectionData":[{"title":"студия","image":"/ЖК Клевер/layouts-1.webp"},{"title":"студия","image":"/ЖК Клевер/layouts-2.webp"},{"title":"студия","image":"/ЖК Клевер/layouts-3.webp"}],"galleryImages":["/81 дом/81  10.webp","/81 дом/7V6-B3M7-8Q (1).webp","/81 дом/81  1.webp","/81 дом/81  8.webp","/81 дом/PfMPjmS37-g.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;source=constructor"};
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
