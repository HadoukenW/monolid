import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"81.2 дом ЖК Академ Риверсайд","titleForLayots":"81.2 доме ЖК Акадам Риверсайд","description":"Откройте для себя комфорт и современность в ЖК Академ Риверсайд 81.2 в Челябинске. Панельные апартаменты на 20 этажах, с планировками от студий до 2-комнатных. Уникальные возможности для первых владельцев в III квартале 2025. Забронируйте ваш идеальный дом прямо сейчас и станьте частью центральной части города!","year":"2025","heroImage":"/public/81 2 дом/7V6-B3M7-8Q (1).webp","location":"Калининский","buildingType":"Панельный","aboutSectionData":[{"title":"Качество и надежность","text":"Наши панельные дома обеспечивают непревзойденную прочность и долговечность. Высота потолков в каждой квартире достигает 2.75 метров, создавая пространство и свободу в вашем доме.","image":"/81 2 дом/81  1.webp"},{"title":"Уют и комфорт","text":"Наши лифты обеспечивают удобный доступ ко всем этажам, а просторный комплекс создает атмосферу комфорта и уюта. Вы сможете наслаждаться каждым моментом вашей жизни, проживая в нашем роскошном жилом комплексе.","image":"/81 2 дом/PfMPjmS37-g.webp"}],"layoutsSectionData":[{"title":"ст+1","image":"/81 2 дом/layouts-1.webp","rooms":"2-комнатная","price":"5 965 000"},{"title":"ст+1","image":"/81 2 дом/layouts-2.webp","rooms":"1-комнатная","price":"4 233 990"},{"title":"ст+1","image":"/81 2 дом/layouts-3.webp","rooms":"студия","price":"2 948 400"},{"title":"ст+1","image":"/81 2 дом/layouts-4.webp","rooms":"студия","price":"2 948 400"},{"title":"ст+1","image":"/81 2 дом/layouts-5.webp","rooms":"1-комнатная","price":"4 233 990"},{"title":"ст+1","image":"/81 2 дом/layouts-6.webp","rooms":"1-комнатная","price":"4 250 000"},{"title":"ст+1","image":"/81 2 дом/layouts-7.webp","rooms":"1-комнатная","price":"3 680 250"}],"galleryImages":["/81 2 дом/PfMPjmS37-g.webp","/81 2 дом/81  1.webp","/81 2 дом/7V6-B3M7-8Q (1).webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Af0a79c4f9a4ad16a274b42415a928d35ab83bf34f18c5cd579ecde35225f3cd2&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/content/catalog/81-2-zhk-riverside.md";
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