import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Притяжение","titleForLayots":"ЖК Притяжение","description":"Новый жилой комплекс совмещающий современные решений и плюсы загородной жизни · Чистый воздух. Панорамные окна. Чистовая отделка. С мебелью и техникой","year":"2027","heroImage":"/public/ЖК Притяжение/4LW5xt6UU3I.webp","location":"Сосновский","buildingType":"Панельный","aboutSectionData":[{"title":"Новый Жилой Комплекс с Панорамными Окнами","text":"Погрузитесь в уют и комфорт нашего нового жилого комплекса, который предлагает современные решения и все преимущества загородной жизни. Насладитесь свежим воздухом, пропитанным запахом природы, и обширными видами через панорамные окна, в то время как чистовая отделка, мебель и техника гарантируют ваше удобство.","image":"/ЖК Притяжение/U40g-5MSn9g.webp"},{"title":"Премиум Комфорт в Объятиях Природы","text":"Идеальное сочетание современных удобств и загородной идиллии ждет вас в нашем новом жилом комплексе. Наслаждайтесь чистым воздухом и потрясающими видами через панорамные окна","наслаждайтесь чистовой отделкой":null,"полной мебелью и современной техникой для комфортного и стильного образа жизни.'":null,"image":"/ЖК Притяжение/4LW5xt6UU3I.webp"}],"galleryImages":["/ЖК Притяжение/image-1.webp","/ЖК Притяжение/SaRT30oAQ.webp","/ЖК Притяжение/U40g-5MSn9g.webp","/ЖК Притяжение/funpark.webp","/ЖК Притяжение/4LW5xt6UU3I.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3A95d928ca715d170cab6b4beeb4625b50054c24e9ffc375b624cbd1e29eea161d&amp;source=constructor"};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/zhk-prityazhenie.md";
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
