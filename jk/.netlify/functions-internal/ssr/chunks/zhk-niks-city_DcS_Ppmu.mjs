import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Никс Сити","url":"zhk-niks-city","city":"в городе Челябинск","titleForLayots":"данной квартире в ЖК Никс Сити","description":"Современный жилой комплекс комфорт класса, расположенный в северо-западном районе г.Челябинска и в 15 минутах от центра города. ЖК «НИКС СИТИ на Ун.Набережной»","year":"2026","heroImage":"/public/никс сити/gl1_2.webp","location":"Калининский","buildingType":"Панельный","aboutSectionData":[{"title":"Программа лояльности","text":"Карта дает доступ к уникальным предложениям от наших партнеров, это не только специальные предложения на строительные,отделочные материалы и бытовую технику, это так же особые условия на образование, развивающие центры, товары повседневного пользования и различные услуги.","image":"/никс сити/image-7 1.webp"},{"title":"Безопасность","text":"Территория ЖК круглосуточно находятся под видеонаблюдением. Въезд и проход на территорию оборудуется системой контроля доступа и возможен только со специальным ключом.","image":"/никс сити/image-1 1.webp"}],"layoutsSectionData":[{"title":"1-комнатная","image":"/никс сити/layouts-1.webp","rooms":"1-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс сити/layouts-2.webp","rooms":"1-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс сити/layouts-3.webp","rooms":"1-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс сити/layouts-4.webp","rooms":"1-комнатная","price":"9 965 340"},{"title":"1-комнатная","image":"/никс сити/layouts-5.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс сити/layouts-6.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс сити/layouts-7.webp","rooms":"2-комнатная","price":"9 965 340"},{"title":"студия","image":"/никс сити/layouts-8.webp","rooms":"2-комнатная","price":"9 965 340"}],"galleryImages":["/никс сити/gl1_2.webp","/никс сити/image-1 1.webp","/никс сити/image-3 1.webp","/никс сити/image-7 1.webp","/никс сити/image-8 1.webp","/никс сити/image-9 1.webp","/никс сити/image-10 1.webp","/никс сити/image-11 1.webp","/никс сити/image-12 1.webp","/никс сити/image-13 1.webp","/никс сити/image-14 1.webp","/никс сити/image-15 1.webp","/никс сити/image-16 1.webp","/никс сити/image-17 1.webp","/никс сити/image-18 1.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A6e14bf82f04fb058107aa52db03b770863bb051d3fc449be0506ec62a2f84e99&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A6e14bf82f04fb058107aa52db03b770863bb051d3fc449be0506ec62a2f84e99&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-niks-city.md";
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