import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-1712","title":"ЖК 1712","city":"в городе Казань","titleForLayots":"данной квартире в ЖК 1712","description":"Жилой комплекс расположен на значительном расстоянии в 1712 километрах от истока реки Волги. Это уникальное местоположение, которое сочетает в себе все преимущества крупного города с возможностью проживания на живописном берегу великой реки Волги, получившее название \"Семнадцать Двенадцать\".","year":"2028","heroImage":"/public/1712/xlarge_7_de9d94f76a.webp","location":"Казань","buildingType":"Кирпично-монолитный","aboutSectionData":[{"title":"Варианты отделки","text":"Мы понимаем, что каждый человек уникален, и каждый дом – отражение индивидуальных предпочтений. Именно поэтому предлагаем два варианта отделки: чистовую и черновую, предоставляя вам свободу выбора и возможность воплотить свои дизайнерские идеи.","image":"/1712/large_gostinaya_sv_vid3_3c9d1b7fb1 (1).webp"},{"title":"Подъезды","text":"Здесь вас встречает стильная мебель, подчеркивающая индивидуальность каждого пространства. Высококачественные отделочные материалы обогащают пространство продолжают единый дизайн-код. Стеклянная входная группа насыщает интерьер естественным светом.","image":"/1712/xlarge_1etazh_vid3_5092cd82ac.webp"},{"title":"Двор","text":"Для детей предусмотрена игровая площадка на стилобате, оснащенная современным игровым оборудованием. Для активного отдыха взрослых есть оборудованная площадка для занятий спортом. Зоны с озеленением идеально подходят для прогулок на свежем воздухе.","image":"/1712/xlarge_4_39b50ec40c.webp"}],"galleryImages":["/1712/large_6_2_e0d7fd4899.webp","/1712/large_3_edfa4e57e6.webp","/1712/large_10_1_10944369f5.webp","/1712/large_10_2_6bd761efff.webp","/1712/xlarge_4_39b50ec40c.webp","/1712/xlarge_5_7faa6ece24.webp","/1712/xlarge_7_de9d94f76a.webp","/1712/xlarge_11_11e0054ac9.webp","/1712/large_gostinaya_sv_vid3_3c9d1b7fb1 (1).webp","/1712/xlarge_1etazh_vid3_5092cd82ac.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3Abb1bdb3742dc25322794560df6a8424879aaf59d87abfd32c20d3fd4dc1bbd36&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Abb1bdb3742dc25322794560df6a8424879aaf59d87abfd32c20d3fd4dc1bbd36&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-1712.md";
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
