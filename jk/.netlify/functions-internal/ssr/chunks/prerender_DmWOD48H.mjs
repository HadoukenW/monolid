import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, k as renderHead } from './astro_7hprNihR.mjs';
import 'kleur/colors';
import { g as getCollection } from './pages/index_DAPqY5Yh.mjs';
import { b as $$BaseHead, a as $$Header, c as $$Image, $ as $$Footer } from './pages/404_C2CttF4i.mjs';
import { $ as $$Breadcrumbs, a as SITE_TITLE, S as SITE_DESCRIPTION } from './pages/calc_Q9czJPIM.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */
import rss from '@astrojs/rss';

const $$Astro$2 = createAstro("https://monolidtest.netlify.app/");
const $$IpotekaPayment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IpotekaPayment;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="ipoteka__title" data-astro-cid-4xmcuzd7> <div class="container" data-astro-cid-4xmcuzd7> <h2 id="ipoteka__title" data-astro-cid-4xmcuzd7>Купить в ипотеку</h2> <ul data-astro-cid-4xmcuzd7> <li data-astro-cid-4xmcuzd7>Ставка от 4,6 % до 30 лет</li> <li data-astro-cid-4xmcuzd7>Подберем ипотеку на выгодных условиях</li> </ul> <p class="preform__title" data-astro-cid-4xmcuzd7>Получите расчет ежемесячного платежа по ипотеке</p> <form class="ipoteka__form"${addAttribute(title, "data-sd")} data-astro-cid-4xmcuzd7> <label data-astro-cid-4xmcuzd7>Количество комнат
<select id="ipotekaFormSelect" data-astro-cid-4xmcuzd7> <option value="1 комната" data-astro-cid-4xmcuzd7>1 комната</option> <option value="2 комнаты" data-astro-cid-4xmcuzd7>2 комнаты</option> <option value="3 комнаты" data-astro-cid-4xmcuzd7>3 комнаты</option> <option value="4 комнаты+" data-astro-cid-4xmcuzd7>4 комнаты+</option> </select> </label> <label data-astro-cid-4xmcuzd7>Первоначальный взнос
<input id="ipotekaFormPayment" min="0" type="number" placeholder="100000" required data-astro-cid-4xmcuzd7> </label> <label data-astro-cid-4xmcuzd7>Срок, лет
<input id="ipotekaFormPeriod" min="0" max="30" type="text" placeholder="0 лет" required data-astro-cid-4xmcuzd7> </label> <label data-astro-cid-4xmcuzd7>Имя
<input id="ipotekaFormName" name="name" type="text" placeholder="Ваше имя" required data-astro-cid-4xmcuzd7> </label> <label data-astro-cid-4xmcuzd7>Телефон
<input id="ipotekaFormPhone" name="phone" class="phoneMask" type="tel" placeholder="Ваш телефон" required data-astro-cid-4xmcuzd7> </label> <button data-astro-cid-4xmcuzd7>Рассчитать ипотеку</button> </form> <p class="personalData" data-astro-cid-4xmcuzd7>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p> </div> </section>  `;
}, "C:/Users/hadou/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/monolid/monolid/jk/src/components/IpotekaPayment.astro", void 0);

const $$Astro$1 = createAstro("https://monolidtest.netlify.app/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, titleForLayots, description, pubDate, updatedDate, heroImage, aboutSectionData, layoutsSectionData, galleryImages, mapLocation } = Astro2.props;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/catalog/14-zhk-riverside.mdx": () => import('./14-zhk-riverside_B9eahkNp.mjs'),"../content/catalog/zhk-bratiev-kashirinyh.mdx": () => import('./zhk-bratiev-kashirinyh_BWt9hIkP.mjs'),"../content/catalog/zhk-sportivniy.mdx": () => import('./zhk-sportivniy_RIcYLoDS.mjs')}), () => "../content/catalog/*.mdx");
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
      href: "/catalog"
    },
    {
      text: title,
      href: `${Astro2.url.pathname}`,
      "data-custom": "custom data attribute"
    }
  ];
  return renderTemplate`<html lang="ru" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "websiteType": "article", "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> <div class="wrapper" data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main itemtype="https://schema.org/Product" itemscope data-astro-cid-bvzihdzo> <link itemprop="mainEntityOfPage"${addAttribute(Astro2.url.pathname, "href")}> <meta itemprop="name"${addAttribute(title, "content")}> <article data-astro-cid-bvzihdzo> <section class="section__hero"${addAttribute(title, "aria-label")} data-astro-cid-bvzihdzo> <div itemtype="http://schema.org/ImageObject" itemscope class="image__wrapper" data-astro-cid-bvzihdzo>${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "loading": "eager", "itemprop": "contentUrl", "src": heroImage, "alt": title, "data-astro-cid-bvzihdzo": true })}`}</div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <div class="c-breadcrumbs" data-astro-cid-bvzihdzo>${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-bvzihdzo": true }, { "separator": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bvzihdzo><polyline points="9 18 15 12 9 6" data-astro-cid-bvzihdzo></polyline> </svg>` })} </div> </section> <section aria-labelledby="about__title" class="section__about" data-astro-cid-bvzihdzo> <div class="container" data-astro-cid-bvzihdzo> <h2 id="about__title" data-astro-cid-bvzihdzo>О проекте</h2> <ul class="about__wrapper" data-astro-cid-bvzihdzo> ${aboutSectionData?.map((item) => renderTemplate`<li data-astro-cid-bvzihdzo> <div class="about__texts" data-astro-cid-bvzihdzo> <h3 data-astro-cid-bvzihdzo>${item.title}</h3> <p data-astro-cid-bvzihdzo>${item.text}</p> </div> <img${addAttribute(item.image, "src")} data-astro-cid-bvzihdzo> </li>`)} </ul> </div> </section> <section aria-labelledby="layouts__title" class="section__layouts" data-astro-cid-bvzihdzo> <div class="container" data-astro-cid-bvzihdzo> <h2 id="layouts__title" data-astro-cid-bvzihdzo>Планировки</h2> <ul data-astro-cid-bvzihdzo> ${layoutsSectionData?.map((item) => renderTemplate`<li data-astro-cid-bvzihdzo> <div itemscope itemtype="https://schema.org/ImageObject" data-astro-cid-bvzihdzo><a${addAttribute(item.image, "data-src")}${addAttribute(item.title, "data-caption")} data-fancybox="layouts" data-astro-cid-bvzihdzo><img itemprop="contentUrl"${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} data-astro-cid-bvzihdzo></a></div> <div class="layouts__texts" data-astro-cid-bvzihdzo> <p data-astro-cid-bvzihdzo>${item.title}</p> <button class="apartment__booking" data-astro-cid-bvzihdzo>Забронировать</button> </div> </li>`)} </ul> </div> </section> <div class="booking__bg" data-astro-cid-bvzihdzo></div> <div class="booking__modal" data-astro-cid-bvzihdzo> <button aria-label="Закрыть форму" class="booking-close-form" data-astro-cid-3ef6ksr2="" data-astro-cid-bvzihdzo> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2="" data-astro-cid-bvzihdzo><g data-astro-cid-3ef6ksr2="" data-astro-cid-bvzihdzo><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2="" data-astro-cid-bvzihdzo></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2="" data-astro-cid-bvzihdzo></path></g></svg> </button> <p class="booking__title" data-astro-cid-bvzihdzo>Получите информацию о данной квартире в ${titleForLayots}</p> <p class="booking__text" data-astro-cid-bvzihdzo>Расскажем о способах приобретения, об акциях и скидках</p> <form id="apartmentInfo"${addAttribute(title, "data-objectName")} data-astro-cid-bvzihdzo> <div class="input__wrapper" data-astro-cid-bvzihdzo> <label for="" data-astro-cid-bvzihdzo> <input type="text" required placeholder="Ваше имя" name="name" id="apartmentName" data-astro-cid-bvzihdzo> </label> <label for="" data-astro-cid-bvzihdzo> <input type="tel" required class="phoneMask" placeholder="Ваш телефон" name="phone" id="apartmentPhone" data-astro-cid-bvzihdzo> </label> </div> <button type="submit" class="consultancyGetting" data-astro-cid-bvzihdzo>Получить консультацию</button> <p class="agreement" data-astro-cid-bvzihdzo>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p> </form> </div> <section aria-labelledby="gallery__title" class="section__gallery" data-astro-cid-bvzihdzo> <div class="container" data-astro-cid-bvzihdzo> <h2 id="gallery__title" data-astro-cid-bvzihdzo>Галерея</h2> <ul data-astro-cid-bvzihdzo> ${galleryImages?.map((item) => renderTemplate`<li data-astro-cid-bvzihdzo> <a${addAttribute(item, "data-src")} data-fancybox="gallery" itemscope itemtype="https://schema.org/ImageObject" data-astro-cid-bvzihdzo> <img itemprop="contentUrl" tabindex="0"${addAttribute(item, "src")} alt="Фото галлерии" data-astro-cid-bvzihdzo> </a> </li>`)} </ul> </div> </section> <div class="maps__wrapper" data-astro-cid-bvzihdzo> <div data-astro-cid-bvzihdzo> <h2 data-astro-cid-bvzihdzo>Расположение комплекса</h2> </div> <iframe${addAttribute(mapLocation, "src")} width="100%" height="500" frameborder="0" data-astro-cid-bvzihdzo></iframe> </div> ${renderComponent($$result, "IpotekaPayment", $$IpotekaPayment, { "title": title, "data-astro-cid-bvzihdzo": true })} <section aria-labelledby="indCons__title" class="section__form" data-astro-cid-bvzihdzo> <div class="container" data-astro-cid-bvzihdzo> <div class="form__wrapper" data-astro-cid-bvzihdzo> <h2 id="indCons__title" data-astro-cid-bvzihdzo>Получить консультацию</h2> <form class="indCons__form"${addAttribute(title, "data-gu")} data-astro-cid-bvzihdzo> <label class="visually-hidden" for="indConsName" data-astro-cid-bvzihdzo>Ваше имя</label> <input required name="name" type="text" id="indConsName" placeholder="Ваше имя" data-astro-cid-bvzihdzo> <label class="visually-hidden" for="indConsPhone" data-astro-cid-bvzihdzo>Ваш телефон</label> <input required name="phone" type="tel" class="phoneMask" id="indConsPhone" placeholder="Ваш телефон" data-astro-cid-bvzihdzo> <button data-astro-cid-bvzihdzo>Записаться</button> </form> <p data-astro-cid-bvzihdzo>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p> </div> </div> </section> </article> </main> <div itemprop="author" itemtype="http://schema.org/Person" itemscope="" data-astro-cid-bvzihdzo><meta itemprop="name" content="Монолид" itemscope=""></div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </div>  </body></html>`;
}, "C:/Users/hadou/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/monolid/monolid/jk/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://monolidtest.netlify.app/");
const prerender$1 = true;
async function getStaticPaths() {
  const posts = await getCollection("catalog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/hadou/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/monolid/monolid/jk/src/pages/catalog/[...slug].astro", void 0);

const $$file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/pages/catalog/[...slug].astro";
const $$url = "/catalog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender: prerender$1,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const prerender = true;

async function GET(context) {
	const posts = await getCollection('catalog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/catalog/${post.slug}`,
		})),
	});
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_ as _, rss_xml as r };