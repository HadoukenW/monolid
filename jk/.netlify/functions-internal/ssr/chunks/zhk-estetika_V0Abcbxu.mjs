import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"url":"zhk-estetika","title":"ЖК Эстетика","city":"в городе Челябинск","titleForLayots":"данной квартире в ЖК Эстетика","description":"Жилой комплекс “Эстетика” расположен в экологически-чистом районе Красного Поля Сосновского района Челябинской области. Одним из основных преимуществ такого расположения является свежий воздух и спокойствие. ","year":"2026","heroImage":"/public/жк эстетика/benefits-4 1.webp","location":"Сосновский","buildingType":"Кирпичный","aboutSectionData":[{"title":"Благоустройство","text":"Создание в локации отдельной зоны притяжения в виде благоустроенной территории с современным жильем","image":"/жк эстетика/img-1.webp"},{"title":"Безопасность","text":"Безопасность проживания в жилых кварталах обеспечивается системой контроля доступа и видеонаблюдением по всей территории","image":"/жк эстетика/img-2.webp"},{"title":"Безбарьерная среда","text":"Качество, доступное всем - вход в подъезды и на площадки благоустройства на одном уровне, без ступеней","image":"/жк эстетика/v01_cam27_1.webp"}],"galleryImages":["/жк эстетика/benefits-4 1.webp","/жк эстетика/benefits-5.webp","/жк эстетика/benefits-6.webp","/жк эстетика/benefits-7.webp","/жк эстетика/benefits-8.webp","/жк эстетика/benefits-9.webp","/жк эстетика/benefits-10.webp","/жк эстетика/benefits-11.webp","/жк эстетика/img-1.webp","/жк эстетика/img-2.webp","/жк эстетика/img-3.webp","/жк эстетика/img-5.webp","/жк эстетика/img-6.webp","/жк эстетика/img-7.webp","/жк эстетика/img-8.webp","/жк эстетика/img-9.webp","/жк эстетика/v01_cam27_1.webp","/жк эстетика/benefits-1.webp","/жк эстетика/benefits-2.webp","/жк эстетика/benefits-3.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A53c6e51268aa323367ac48c95495c9d7518dad2ab1b53f67a4d1ebbe1ca57acf&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A53c6e51268aa323367ac48c95495c9d7518dad2ab1b53f67a4d1ebbe1ca57acf&amp;width=600&amp;height=450&amp;lang=ru_RU"}};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-estetika.md";
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