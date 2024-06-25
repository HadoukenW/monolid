import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-niks-line","title":"ЖК Никс Лайн","city":"в городе Челябинск","titleForLayots":"данной квартире в ЖК Никс Лайн","description":"ЖК «Никс Лайн» расположен в Советском районе Челябинска вдоль улицы Блюхера. Запланировано строительство одиннадцати десятиэтажных панельных домов с оригинальным архитектурным стилем. Сданы и заселены пять домов, завершение строительства комплекса запланировано в 3 квартале 2025г.","year":"2026","heroImage":"/public/никс лайн/banner.webp","location":"Советский","buildingType":"Панельный","aboutSectionData":[{"title":"Гармония Между Городом и Природой","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/никс лайн/niks-line.webp"},{"title":"Идеальное Жилье для Стильных Гурманов","text":"Для тех, кто ценит роскошь и стиль, наш жилой комплекс предлагает идеальное жилье. Особенности включают современную архитектуру с уникальным и и и элегантным дизайном, который добавляет шарма и индивидуальности вашему пространству.","video":"/никс лайн/8mb.video-hdD-AAE6pH2P.mp4"},{"title":"Развитая инфраструктура","text":"Мы гордимся разнообразием инфраструктуры, которая создана и продолжает развиваться вокруг нашего комплекса. Рестораны, кафе, фитнес-центры и парки - здесь есть все, чтобы удовлетворить ваши потребности и желания.","image":"/никс лайн/download (4).webp"}],"galleryImages":["/никс лайн/download (1).webp","/никс лайн/4K4A8992.webp","/никс лайн/download (4).webp","/никс лайн/BH9A7356_2.jpg","/никс лайн/BH9A7349_2_1_ (1).jpg","/никс лайн/BH9A7364_2.jpg","/никс лайн/BH9A7339_2.webp","/никс лайн/download (2).webp","/никс лайн/download (3).webp","/никс лайн/BH9A7373_2.jpg","/никс лайн/BH9A7317_2.webp","/никс лайн/banner.webp","/никс лайн/niks-line.webp","/никс лайн/BH9A7340_2_1_.jpg","/никс лайн/BH9A1835_2_1_1_.webp","/никс лайн/7.webp","/никс лайн/ptichka_NIX_LAYN 1.webp","/никс лайн/4K4A8997.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A7ee8aac69c2cfeb9140e73bbc9bc60b83263a28cfdb7da25505df8fdab700d33&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A7ee8aac69c2cfeb9140e73bbc9bc60b83263a28cfdb7da25505df8fdab700d33&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-niks-line.md";
				const url = undefined;
				function rawContent() {
					return "\r\n";
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
