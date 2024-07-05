import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Притяжение","url":"zhk-prityazhenie","city":"в городе Челябинск","titleForLayots":"ЖК Притяжение","description":"Новый жилой комплекс совмещающий современные решений и плюсы загородной жизни · Чистый воздух. Панорамные окна. Чистовая отделка. С мебелью и техникой","year":"2025","heroImage":"/public/ЖК Притяжение/4LW5xt6UU3I.webp","location":"Сосновский","buildingType":"Панельный","aboutSectionData":[{"title":"Низкие ставки по ипотеке от банков-партнеров","text":"В жилом комплексе «Притяжение» можно приобрести квартиру в ипотеку. Банки партнеры предлагают отличные и привлекательные условия для покупателей, которые позволяют вам инвестировать в свое будущее жилье.","image":"/ЖК Притяжение/U40g-5MSn9g.webp"},{"title":"Премиум Комфорт в Объятиях Природы","text":"Идеальное сочетание современных удобств и загородной идиллии ждет вас в нашем новом жилом комплексе. Наслаждайтесь чистым воздухом и потрясающими видами через панорамные окна","наслаждайтесь чистовой отделкой":null,"полной мебелью и современной техникой для комфортного и стильного образа жизни.'":null,"image":"/ЖК Притяжение/4LW5xt6UU3I.webp"}],"buildingProcess":[{"image":"/ЖК Притяжение/we-1.webp"},{"image":"/ЖК Притяжение/we-2.webp"},{"image":"/ЖК Притяжение/we-3.webp"},{"image":"/ЖК Притяжение/we-4.webp"},{"image":"/ЖК Притяжение/we-5.webp"},{"image":"/ЖК Притяжение/we-6.webp"},{"image":"/ЖК Притяжение/we-7.webp"},{"image":"/ЖК Притяжение/we-8.webp"},{"image":"/ЖК Притяжение/we-9.webp"},{"image":"/ЖК Притяжение/we-10.webp"}],"galleryImages":["/ЖК Притяжение/ge5t46gj.webp","/ЖК Притяжение/image-1.webp","/ЖК Притяжение/SaRT30oAQ.webp","/ЖК Притяжение/U40g-5MSn9g.webp","/ЖК Притяжение/funpark.webp","/ЖК Притяжение/4LW5xt6UU3I.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A95d928ca715d170cab6b4beeb4625b50054c24e9ffc375b624cbd1e29eea161d&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A95d928ca715d170cab6b4beeb4625b50054c24e9ffc375b624cbd1e29eea161d&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-prityazhenie.md";
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
