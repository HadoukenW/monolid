import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"81-1-zhk-riverside","title":"ЖК Академ Риверсайд дом 81.1","city":"в городе Челябинск","titleForLayots":"данной квартире в 81.1 доме ЖК Академ Риверсайд","description":"Откройте для себя комфорт и современность в ЖК Академ Риверсайд 81.1 в Челябинске. Панельные апартаменты на 20 этажах, с планировками от студий до 4-комнатных. Уникальные возможности для первых владельцев в III квартале 2025. Забронируйте ваш идеальный дом прямо сейчас и станьте частью центральной части города!","year":"2025","heroImage":"/public/81 1 дом/81  10.webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Качество и надежность","text":"Наши дома построены из монолитного кирпича, обеспечивая непревзойденную прочность и долговечность. Высота потолков в каждой квартире достигает 2.75 метров, создавая пространство и свободу в вашем доме.","image":"/81 1 дом/81  8.webp"},{"title":"Уют и комфорт","text":"Наши лифты обеспечивают удобный доступ ко всем этажам, а просторный комплекс создает атмосферу комфорта и уюта. Вы сможете наслаждаться каждым моментом вашей жизни, проживая в нашем роскошном жилом комплексе.","image":"/81 1 дом/w9I0HO3ryCY.webp"}],"layoutsSectionData":[{"title":"ст+1","image":"/81 1 дом/layouts-1.webp","rooms":"3-комнатная","price":"9 378 000"},{"title":"ст+1","image":"/81 1 дом/layouts-2.webp","rooms":"2-комнатная","price":"5 253 000"},{"title":"ст+1","image":"/81 1 дом/layouts-3.webp","rooms":"2-комнатная","price":"6 757 500"},{"title":"ст+1","image":"/81 1 дом/layouts-4.webp","rooms":"1-комнатная","price":"3 559 600"},{"title":"ст+1","image":"/81 1 дом/layouts-5.webp","rooms":"2-комнатная","price":"6 757 500"},{"title":"ст+1","image":"/81 1 дом/layouts-6.webp","rooms":"2-комнатная","price":"5 583 375"},{"title":"ст+1","image":"/81 1 дом/layouts-7.webp","rooms":"1-комнатная","price":"4 574 350"}],"galleryImages":["/81 1 дом/w9I0HO3ryCY.webp","/81 1 дом/81  10.webp","/81 1 дом/81  8.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/81-1-zhk-riverside.md";
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
