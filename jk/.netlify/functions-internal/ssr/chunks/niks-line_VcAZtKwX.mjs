import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-niks-line","title":"ЖК Никс Лайн","city":"в городе Челябинск","titleForLayots":"ЖК Никс Лайн","description":"ЖК Клевер - современное жилье в самом сердце города. Элегантный дизайн, удобное расположение, разнообразная инфраструктура и природные зоны делают его идеальным выбором для комфортной и стильной жизни.","year":"2023","heroImage":"/public/никс лайн/banner.webp","location":"Советский","buildingType":"Панельный","aboutSectionData":[{"title":"Гармония Между Городом и Природой","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/никс лайн/niks-line.webp"},{"title":"Идеальное Жилье для Стильных Гурманов","text":"Для тех, кто ценит роскошь и стиль, наш жилой комплекс предлагает идеальное жилье. Особенности включают современную архитектуру с уникальным и и и элегантным дизайном, который добавляет шарма и индивидуальности вашему пространству.","video":"/никс лайн/8mb.video-hdD-AAE6pH2P.mp4"},{"title":"Развитая инфраструктура","text":"Мы гордимся разнообразием инфраструктуры, которая создана и продолжает развиваться вокруг нашего комплекса. Рестораны, кафе, фитнес-центры и парки - здесь есть все, чтобы удовлетворить ваши потребности и желания.","image":"/никс лайн/image-4 1.webp"}],"layoutsSectionData":[{"title":"1-комнатная","image":"/никс лайн/layouts-1.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс лайн/layouts-2.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс лайн/layouts-3.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс лайн/layouts-4.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс лайн/layouts-5.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-6.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-7.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-8.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-9.webp","rooms":"3-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-10.webp","rooms":"3-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-11.webp","rooms":"3-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс лайн/layouts-12.webp","rooms":"3-комнатная","price":"9 965 340"}],"galleryImages":["/никс лайн/image-3 1.webp","/никс лайн/image-5 1.webp","/никс лайн/image-1.webp","/никс лайн/image-2 1.webp","/никс лайн/image-1.webp","/никс лайн/image-6 1.webp","/никс лайн/ptichka_NIX_LAYN 1.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A7ee8aac69c2cfeb9140e73bbc9bc60b83263a28cfdb7da25505df8fdab700d33&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A7ee8aac69c2cfeb9140e73bbc9bc60b83263a28cfdb7da25505df8fdab700d33&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/niks-line.md";
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
