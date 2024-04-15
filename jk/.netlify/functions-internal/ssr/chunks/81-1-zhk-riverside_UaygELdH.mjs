import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"81.1 дом ЖК Академ Риверсайд","titleForLayots":"81.1 доме ЖК Акадам Риверсайд","description":"Lorem ipsum dolor sit amet","year":"2025","heroImage":"/public/81 1 дом/7V6-B3M7-8Q (1).webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Игровые площадки","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/81 1 дом/81  1.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/81 1 дом/PfMPjmS37-g.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/81 1 дом/81  1.webp"}],"layoutsSectionData":[{"title":"ст+1","image":"/81 1 дом/layouts-1.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-2.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-3.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-4.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-5.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-6.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-7.webp"}],"galleryImages":["/81 1 дом/7V6-B3M7-8Q (1).webp","/81 1 дом/81  1.webp","/81 1 дом/PfMPjmS37-g.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;source=constructor"};
				const file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/catalog/81-1-zhk-riverside.md";
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
