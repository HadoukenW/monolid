import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-niks-pro","title":"ЖК Никс Про","city":"в городе Челябинск","titleForLayots":"данной квартире в ЖК Никс Про","description":"Подбирайте Жилой Комплекс «Никс Про» — где ваше жилье превращается не просто в место проживания, а в уникальное пространство для вашей семьи. Условия ипотеки. Площадь жилья. ... Дом начинается не с квартиры. Жителей и гостей НИКС Про встречает парадная с оригинальным дизайном. Современные парадные — это многофункциональное пространство, где человек может работать, отдыхать, общаться с друзьями.","year":"Строится","heroImage":"/public/никс про/image-1.webp","location":"Центральный","buildingType":"Монолитный","aboutSectionData":[{"title":"Просторные террасы в пентхаусах","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/никс про/image-2.webp"},{"title":"Сосновый бор за окном","text":"Сосновый бор за окном станет вашим личным уголком гармонии, местом, где можно провести время в уединении с природой и насладиться ее красотой.","image":"/никс про/1c24c0eb32b85f24136a3b18f5008f44 1.webp"},{"title":"Современные планировки","text":"Для тех, кто ценит роскошь и стиль, наш жилой комплекс предлагает идеальное жилье. Особенности включают современную архитектуру с уникальным и и и элегантным дизайном, который добавляет шарма и индивидуальности вашему пространству.","image":"/никс про/image-1.webp"},{"title":"Подземный паркинг и кладовые","text":"Мы предлагаем удобные и безопасные решения для хранения вашего автомобиля и имущества. Наши подземные парковки обеспечивают защиту вашего автомобиля от погодных условий, сохраняют его в хорошем состоянии и обеспечивают удобный доступ.","image":"/никс про/dfgdfgdfggg.webp"}],"galleryImages":["/никс про/image-1.webp","/никс про/image-2.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A0ce6b369b504e040a501c098cc3bf4f8c999f7f017dbe0514e45358bb4c5a92a&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A0ce6b369b504e040a501c098cc3bf4f8c999f7f017dbe0514e45358bb4c5a92a&amp;width=600&amp;height=450&amp;lang=ru_RU"},"isInProgress":"Скоро старт продаж"};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-niks-pro.md";
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