import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Притяжение","titleForLayots":"ЖК Притяжение","description":"Lorem ipsum dolor sit amet","year":"2027","heroImage":"/public/ЖК Притяжение/4LW5xt6UU3I.webp","location":"Сосновский","buildingType":"Панельный","aboutSectionData":[{"title":"Игровые площадки","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/ЖК Притяжение/U40g-5MSn9g.webp"},{"title":"Безопасный двор","text":"В жилом комплексе представлено более 10 видов планировок, некоторые из них, предусматривают большие панорамные окна.","image":"/ЖК Притяжение/4LW5xt6UU3I.webp"}],"galleryImages":["/ЖК Притяжение/image-1.webp","/ЖК Притяжение/SaRT30oAQ.webp","/ЖК Притяжение/U40g-5MSn9g.webp","/ЖК Притяжение/funpark.webp","/ЖК Притяжение/4LW5xt6UU3I.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3A95d928ca715d170cab6b4beeb4625b50054c24e9ffc375b624cbd1e29eea161d&amp;source=constructor"};
				const file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/catalog/zhk-prityazhenie.md";
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