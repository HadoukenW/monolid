import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Клевер","city":"в городе Челябинск","titleForLayots":"ЖК Клевер","description":"ЖК Клевер - современное жилье в самом сердце города. Элегантный дизайн, удобное расположение, разнообразная инфраструктура и природные зоны делают его идеальным выбором для комфортной и стильной жизни.","year":"2027","heroImage":"/public/ЖК Клевер/квартал 5.1/image-2.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Гармония Между Городом и Природой","text":"Откройте дверь в свою идеальную жизнь! Новый стильный жилой комплекс — ваш личный рай! Комфорт, уют, и безграничные возможности ждут вас здесь! Наши улицы — путь к счастью, наши дворы — оазис умиротворения! Инфраструктура, которая удовлетворит все ваши потребности! Выберите комфортное место проживания, выберите наш жилой комплекс!»","image":"/ЖК Клевер/квартал 5.1/image-5.webp"},{"title":"Идеальное Жилье для Стильных Гурманов","text":"Для тех, кто ценит роскошь и стиль, наш жилой комплекс предлагает идеальное жилье. Особенности включают современную архитектуру с уникальным и и и элегантным дизайном, который добавляет шарма и индивидуальности вашему пространству.","image":"/ЖК Клевер/квартал 2.1/image-2.webp"},{"title":"Развитая инфраструктура","text":"Мы гордимся разнообразием инфраструктуры, которая создана и продолжает развиваться вокруг нашего комплекса. Рестораны, кафе, фитнес-центры и парки - здесь есть все, чтобы удовлетворить ваши потребности и желания.","image":"/ЖК Клевер/квартал 3.1/image-4.webp"}],"kvartal2N1":["/ЖК Клевер/квартал 2.1/image-1.webp","/ЖК Клевер/квартал 2.1/image-2.webp","/ЖК Клевер/квартал 2.1/image-3.webp","/ЖК Клевер/квартал 2.1/image-4.webp","/ЖК Клевер/квартал 2.1/image-5.webp"],"kvartal3N1":["/ЖК Клевер/квартал 3.1/image-1.webp","/ЖК Клевер/квартал 3.1/image-2.webp","/ЖК Клевер/квартал 3.1/image-3.webp","/ЖК Клевер/квартал 3.1/image-4.webp","/ЖК Клевер/квартал 3.1/image-5.webp"],"kvartal5N1":["/ЖК Клевер/квартал 5.1/image-1.webp","/ЖК Клевер/квартал 5.1/image-2.webp","/ЖК Клевер/квартал 5.1/image-3.webp","/ЖК Клевер/квартал 5.1/image-4.webp","/ЖК Клевер/квартал 5.1/image-5.webp"],"kvartalParkovka":["/ЖК Клевер/здание парковки/image-1.webp","/ЖК Клевер/здание парковки/image-2.webp","/ЖК Клевер/здание парковки/image-3.webp","/ЖК Клевер/здание парковки/image-4.webp","/ЖК Клевер/здание парковки/image-5.webp"],"galleryImages":["/ЖК Клевер/image-1.webp","/ЖК Клевер/klever-1.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A62f6cad65625e6353ab9bf77cf0eb2922b2f7a5bd5caea85056d84f17775987c&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A62f6cad65625e6353ab9bf77cf0eb2922b2f7a5bd5caea85056d84f17775987c&amp;width=600&amp;height=450&amp;lang=ru_RU"},"isInProgress":"Скоро старт продаж"};
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