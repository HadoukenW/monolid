import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ЖК Новиль","url":"zhk-novil","city":"в поселке Пригородный","titleForLayots":"данной квартире в ЖК Новиль","description":"Кварталы для жизни «Новиль» — это новый проект комфорт-класса от ГК White Group. Жилой комплекс возводится на Новоградском тракте, в 5 минутах от Челябинска. Первая очередь включает 7 монолитных домов, четыре из которых будут сданы уже в 2024 году. ","year":"2027","heroImage":"/public/новиль/73_Ikar_cam_3.avif","location":"Сосновский","buildingType":"Кирпично-монолитный","aboutSectionData":[{"title":"Экологичный подход","text":"фундаментальный принцип строительства кварталов «Новиль» не только в выборе расположения, но и в заботе о безопасности и комфорте его будущих жителей.","image":"/новиль/image-014.avif"},{"title":"Современная архитектура","text":"Дома в этом проекте представляют собой современные и лаконичные постройки, которые основаны на принципах разделения приватной и общедоступной зон.","image":"/новиль/image-015.avif"},{"title":"Удобная планировка","text":"функциональная и отвечающая требованиям каждого члена семьи квартира. Именно такие варианты в кварталах «Новиль»","image":"/новиль/image-026.avif"}],"galleryImages":["/новиль/3__3__2.avif","/новиль/image-003.avif","/новиль/73_Ikar_cam_9.avif","/новиль/___003.avif","/новиль/image-002.avif","/новиль/image-003.avif","/новиль/image-018.avif","/новиль/image-021.avif","/новиль/image-034.avif","/новиль/73_Ikar_cam_4.avif","/новиль/73_Ikar_cam_6.avif","/новиль/image-014.avif","/новиль/image-015.avif","/новиль/image-026.avif","/новиль/73_Ikar_cam_3.avif"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A0582d1a913d00f4590d05bab627629dc2ea5f9eff81fecae0fbc313abeb7d2b5&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A0582d1a913d00f4590d05bab627629dc2ea5f9eff81fecae0fbc313abeb7d2b5&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/zhk-novil.md";
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
