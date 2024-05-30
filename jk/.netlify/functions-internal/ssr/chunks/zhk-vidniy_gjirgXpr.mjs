import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-vidniy","title":"ЖК Видный","city":"в городе Челябинск","titleForLayots":"ЖК Видный","description":"ЖК «Видный». 25-этажные монолитно-каркасные башни, расположатся на улице 250-летия Челябинска. Застройщиком выступает компания ООО «Трест Магнитострой». Записаться на экскурсию в ЖК \"Видный\".","year":"2025","heroImage":"/public/ЖК Видный/RU_-Lk7t8dc.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Идеальное расположение","text":"Наш комплекс удачно расположен в развитом спальном районе города, обеспечивая вам все преимущества комфортной жизни. Здесь вы найдете все необходимое для повседневной жизни: школы, детские сады, магазины и медицинские учреждения - все в шаговой доступности.","image":"/ЖК Видный/j_8EAYYU0VU.webp"},{"title":"Развитая инфраструктура","text":"Мы гордимся разнообразием инфраструктуры, которая создана и продолжает развиваться вокруг нашего комплекса. Рестораны, кафе, фитнес-центры и парки - здесь есть все, чтобы удовлетворить ваши потребности и желания.","image":"/ЖК Видный/QYDnP9QCpyg.webp"}],"layoutsSectionData":[{"title":"студия","image":"/ЖК Видный/layout-1.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/ЖК Видный/layout-2.webp","rooms":"студия","price":"6 113 160"},{"title":"студия","image":"/ЖК Видный/layout-3.webp","rooms":"1-комнатная","price":"8 892 180"},{"title":"студия","image":"/ЖК Видный/layout-4.webp","rooms":"студия","price":"6 130 800"},{"title":"студия","image":"/ЖК Видный/layout-5.webp","rooms":"2-комнатная","price":"10 444 000"},{"title":"студия","image":"/ЖК Видный/layout-6.webp","rooms":"2-комнатная","price":"8 886 240"},{"title":"студия","image":"/ЖК Видный/layout-7.webp","rooms":"студия","price":"6 217 920"},{"title":"студия","image":"/ЖК Видный/layout-8.webp","rooms":"3-комнатная","price":"14 287 680"}],"galleryImages":["/ЖК Видный/j_8EAYYU0VU.webp","/ЖК Видный/QYDnP9QCpyg.webp","/ЖК Видный/RU_-Lk7t8dc.webp","/ЖК Видный/-DoMQhYsHYI.webp","/ЖК Видный/jiPBentvc8w.webp","/ЖК Видный/MjxPsqLPIZs 1.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A99bfa1eb05cb51a7b232ff0c70919b7ef93b38a69c58524f96e0b92906f4582f&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A99bfa1eb05cb51a7b232ff0c70919b7ef93b38a69c58524f96e0b92906f4582f&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/zhk-vidniy.md";
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
