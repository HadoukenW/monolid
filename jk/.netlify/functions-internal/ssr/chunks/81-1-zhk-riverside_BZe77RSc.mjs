import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"81.1 дом ЖК Академ Риверсайд","titleForLayots":"81.1 доме ЖК Акадам Риверсайд","description":"Откройте для себя комфорт и современность в ЖК Академ Риверсайд 81.1 в Челябинске. Панельные апартаменты на 20 этажах, с планировками от студий до 2-комнатных. Уникальные возможности для первых владельцев в III квартале 2025. Забронируйте ваш идеальный дом прямо сейчас и станьте частью центральной части города!","year":"2025","heroImage":"/public/81 1 дом/7V6-B3M7-8Q (1).webp","location":"Калининский","buildingType":"Монолитный","aboutSectionData":[{"title":"Качество и надежность","text":"Наши дома построены из монолитного кирпича, обеспечивая непревзойденную прочность и долговечность. Высота потолков в каждой квартире достигает 2.75 метров, создавая пространство и свободу в вашем доме.","image":"/81 1 дом/81  1.webp"},{"title":"Уют и комфорт","text":"Наши лифты обеспечивают удобный доступ ко всем этажам, а просторный комплекс создает атмосферу комфорта и уюта. Вы сможете наслаждаться каждым моментом вашей жизни, проживая в нашем роскошном жилом комплексе.","image":"/81 1 дом/PfMPjmS37-g.webp"},{"title":"Благоприятное окружение","text":"Вокруг комплекса расположено множество различных удобных мест. От магазинов и ресторанов до парков и спортивных площадок - здесь есть все необходимое для комфортной и насыщенной жизни.","image":"/81 1 дом/81  1.webp"}],"layoutsSectionData":[{"title":"ст+1","image":"/81 1 дом/layouts-1.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-2.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-3.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-4.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-5.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-6.webp"},{"title":"ст+1","image":"/81 1 дом/layouts-7.webp"}],"galleryImages":["/81 1 дом/7V6-B3M7-8Q (1).webp","/81 1 дом/81  1.webp","/81 1 дом/PfMPjmS37-g.webp"],"mapLocation":"https://yandex.ru/map-widget/v1/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;source=constructor"};
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