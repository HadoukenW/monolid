import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"cottageUrl":"zhk-evropeiskii","title":"Посёлок Европейский 2","city":"Сосновский","titleForLayots":"данном доме в ЖК Европейский 2","description":"Европейский-2. Это обновленная и улучшенная версия поселка Европейский, который построен в 2018–2021 гг., в той же локации. Новый поселок находится четырех километрах от северо-западной границы Челябинска. Челябинская область, Сосновский район, пос. Красное поле.","year":"2025","heroImage":"/public/европейский/Poselok_v06_cam21-1.jpg","location":"Сосновский","buildingType":"Кирпичный","aboutSectionData":[{"title":"Расположение","text":"Cовременный загородный посёлок, расположен в лесном массиве в северо-западном пригороде Челябинска. Сосновский район, пос. Красное поле -  экологически чистое место в 20 минутах от города.","image":"/европейский/Вид-сверху-1.jpg"},{"title":"Безопасность","text":"В безопасной близости к городской инфраструктуре и на безопасном удалении от промышленных зон.","image":"/европейский/Европейский-2.jpg"},{"title":"Благоустройство","text":"Оборудованы гостевые парковки, участки отсыпаны черноземом, высажены ели. Проезжая часть и тротуары устроены по принципу безбарьерной среды. Уложены асфальтовое покрытие и брусчатка. Построена безопасная и современная детская площадка. Сквер на въезде с вечерним освещением, прогулочными дорожками и лавочками.","image":"/европейский/Центральная-площадь-1.jpg"}],"galleryImages":["/европейский/293.jpg","/европейский/4373-1.jpg","/европейский/evropeiskii1590166904745.jpg","/европейский/evropeiskii-31590166904749.jpg","/европейский/evropeiskii-41590166904750.jpg","/европейский/evropeiskii-51590166904751.jpg","/европейский/evropeiskii-61590166904752.jpg","/европейский/Poselok_v06_cam21-1.jpg","/европейский/Вид-от-парадного-въезда-1.jpg","/европейский/Вид-сверху-1.jpg","/европейский/Европейский-бульвар-1.jpg","/европейский/Парадный-въезд.jpg","/европейский/Улица-Балтийская.jpg","/европейский/Центральная-площадь-1.jpg","/европейский/image 17.webp","/европейский/image 18.webp","/европейский/image 19.webp","/европейский/image 20.webp","/европейский/image 21.webp","/европейский/image 22.webp","/европейский/image 23.webp","/европейский/image 24.webp","/европейский/image 25.webp","/европейский/image 26.webp"],"mapStatic":{"mapLink":"https://yandex.ru/maps/?um=constructor%3A9bef0f63b8afcce138bd2ca36daa7faec836c8ce22c7530cb7ccbe80c0ac81ab&amp;source=constructorStatic","mapPath":"https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A9bef0f63b8afcce138bd2ca36daa7faec836c8ce22c7530cb7ccbe80c0ac81ab&amp;width=600&amp;height=450&amp;lang=ru_RU"},"isCottage":true};
				const file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/content/catalog/zhk-evropeiskii2.md";
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
