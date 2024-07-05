import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-costura-town","title":"ЖК Costura Town","city":"в городе Казань","titleForLayots":"данной квартире в ЖК Costura Town","description":"Costura Town расположен в историческом районе Казани, известном как Суконная Слобода. Развитая инфраструктура этого района предоставляет высокий уровень жизни и широкий спектр возможностей. Здесь сосредоточены торговые и бизнес-центры, государственные и административные учреждения, ведущие учебные заведения, живописные парки и скверы, а также разнообразие кафе и ресторанов, обеспечивая комфортную городскую среду для жителей.","year":"2027","heroImage":"/public/Costura Town/xlarge_1_cb051b1748.webp","location":"Казань","buildingType":"Кирпично-монолитный","aboutSectionData":[{"title":"Подъезды","text":"Дизайнерская отделка подъездов с использованием материалов изящно дополняет премиальный внешний вид и архитектуру здания. Светлые и просторные холлы на 1 этаже в каждом подъезде создают уют для жильцов уже с порога дома.","image":"/Costura Town/large_resepshn_6_e4f6aa4028.webp"},{"title":"Двор","text":"Двор-сквер на уровне 2 этажа - это приватное безопасное пространство для жильцов дома. Стильный ландшафтный дизайн с прудом, многолетними растениями, местами для прогулок и отдыха превратили двор в настоящий уютный сквер. А современная детская площадка из эко материалов способствует развитию в процессе игры и отличное настроение для ваших детей.","image":"/Costura Town/large_obshhij_vid_dvorov_kopiya_860f90fd1e.webp"},{"title":"Инженерные системы","text":"Антивандальные IP видеокамеры, расположенные на всей территории комплекса, обеспечивают спокойствие и безопасность жильцов дома 24/7. Двухконтурный газовый котел позволяет создавать комфортную температуру воды и воздуха в каждой квартире, а также существенно снижает потребление энергии.","image":"/Costura Town/large_liftovoj_holl_tipovoj_etazh_2_5d4d4168cc.webp"}],"galleryImages":["/Costura Town/xlarge_2_2_156732923c.jpg","/Costura Town/xlarge_2_4_480ec95003.jpg","/Costura Town/large_3_1_76e57bddd1.webp","/Costura Town/xlarge_1_12410eac4f.webp","/Costura Town/xlarge_1_cb051b1748.webp","/Costura Town/xlarge_2_1_3ec2c1ac9c.jpg","/Costura Town/xlarge_2_3_a64791c695.jpg","/Costura Town/xlarge_2_5_f29d4c5a81.jpg","/Costura Town/xlarge_2_6_6478d251c3.jpg","/Costura Town/xlarge_2_d1130d6abe.jpg","/Costura Town/xlarge_3_7897edfc32.jpg","/Costura Town/xlarge_4_eab995937e.jpg","/Costura Town/large_obshhij_vid_dvorov_kopiya_860f90fd1e.webp","/Costura Town/large_liftovoj_holl_tipovoj_etazh_2_5d4d4168cc.webp","/Costura Town/large_resepshn_6_e4f6aa4028.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3Ae8c00150e35e6b27e61f9996197742e0a9f4bc37f31b4d241e14ed70b60d22b2&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ae8c00150e35e6b27e61f9996197742e0a9f4bc37f31b4d241e14ed70b60d22b2&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-costura-town.md";
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
