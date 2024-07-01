import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './404_8GJIQRz6.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, k as renderHead } from '../astro_7hprNihR.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './calc_D_QHDsiW.mjs';
/* empty css                           */
/* empty css                          */
import { u as urlForImage, a as getSanity } from './index_CYbmVl4G.mjs';
import { PortableText } from '@portabletext/react';
import { jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                              */

const $$Astro$1 = createAstro("https://monolid74.com/");
const $$PortableTextBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableTextBody;
  const { body, components } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`body`, "class")}> ${renderComponent($$result, "PortableText", PortableText, { "value": body, "components": components })} </div>`;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/components/PortableTextBody.astro", void 0);

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value).format("webp").url();
      return /* @__PURE__ */ jsx("img", { src: `${imageUrl}`, alt: "test alt" });
    },
    list: (node) => {
      return /* @__PURE__ */ jsx("ul", { children: node.children.map((child, index) => /* @__PURE__ */ jsx("li", { children: child }, index)) });
    },
    divider: ({ value }) => {
      return /* @__PURE__ */ jsx("div", { style: { height: `${value.height}px` } });
    }
  },
  marks: {
    span: ({ children }) => /* @__PURE__ */ jsx("sup", { className: "sup", children }),
    link: (node) => {
      return /* @__PURE__ */ jsx("a", { href: node.value.href, target: node.value._blank ? "_blank" : null, children: node.children });
    }
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://monolid74.com/");
const $$Vtorichka = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vtorichka;
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0435",
      href: "/vtorichka/"
    }
  ];
  const sanityVtorichka = await getSanity([`*[_type == 'vtorichka'] | order(orderRank asc)`]);
  console.log(sanityVtorichka);
  return renderTemplate(_a || (_a = __template(['<html lang="ru" data-astro-cid-65bwhtiv> <head>', "", '</head> <body data-astro-cid-65bwhtiv> <div class="wrapper" data-astro-cid-65bwhtiv> ', ' <div class="breadcrumbs__container" data-astro-cid-65bwhtiv> <div class="c-breadcrumbs" data-astro-cid-65bwhtiv>', ' </div> </div> <main data-astro-cid-65bwhtiv> <section id="ourServices" aria-labelledby="ourservices__title" data-astro-cid-65bwhtiv> <h1 id="ourservices__title" data-astro-cid-65bwhtiv>\u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0435</h1> ', " </section> </main> ", ` </div> <div class="booking__bg" data-astro-cid-65bwhtiv></div> <div class="booking__modal" data-astro-cid-65bwhtiv> <button aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0440\u043C\u0443" class="booking-close-form" data-astro-cid-65bwhtiv> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2="" data-astro-cid-65bwhtiv><g data-astro-cid-3ef6ksr2="" data-astro-cid-65bwhtiv><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2="" data-astro-cid-65bwhtiv></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2="" data-astro-cid-65bwhtiv></path></g></svg> </button> <p class="booking__title" data-astro-cid-65bwhtiv>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435</p> <p class="booking__text" data-astro-cid-65bwhtiv>\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u0445 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044F, \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u0438 \u0446\u0435\u043D\u0435</p> <form id="apartmentInfo" data-astro-cid-65bwhtiv> <div class="input__wrapper" data-astro-cid-65bwhtiv> <label for="" data-astro-cid-65bwhtiv> <input type="text" required placeholder="\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" name="name" id="apartmentName" data-astro-cid-65bwhtiv> </label> <label for="" data-astro-cid-65bwhtiv> <input type="tel" required class="phoneMask" placeholder="\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D" name="phone" id="apartmentPhone" data-astro-cid-65bwhtiv> </label> </div> <button type="submit" class="consultancyGetting" data-astro-cid-65bwhtiv>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E</button> <p class="agreement" data-astro-cid-65bwhtiv>\xAB\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0434\u0430\u0435\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C c \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438\xBB</p> <div class="form-sent-message consultancy-message" data-astro-cid-65bwhtiv> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-65bwhtiv><g data-astro-cid-65bwhtiv><switch data-astro-cid-65bwhtiv><g data-astro-cid-65bwhtiv><g fill="#02bc7d" data-astro-cid-65bwhtiv><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-65bwhtiv></path><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-65bwhtiv></path></g></g></switch></g></svg> <p data-astro-cid-65bwhtiv>\u0424\u043E\u0440\u043C\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430</p> </div> </form> </div>   <script type="module">
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperElements = document.querySelectorAll('.swiper');
const swiperElements2 = document.querySelectorAll('.swiper2');

swiperElements.forEach((swiperElement, index) => {
   
    const swiper2 = new Swiper(swiperElements2[index], {
        // Optional parameters for the thumbs swiper
        // ...
        loop: true,
       
       
        watchSlidesProgress: true,
        allowTouchMove: false,
        spaceBetween: 5,
        autoHeight: true,
        direction: 'horizontal',

        breakpoints: {
           

            767: {
                direction: 'vertical',
            }
        }
    });
   
   
    const swiper = new Swiper(swiperElement, {
      // Optional parameters for the main swiper
      // ...
      loop: true,
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl:  swiperElement.querySelector('.swiper-next'),
      prevEl:  swiperElement.querySelector('.swiper-prev'),
    },

    watchSlidesProgress: true,
    thumbs: {
        swiper: swiper2,
      },
    });
});





<\/script></body></html>`])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u041A\u0443\u043F\u0438\u0442\u044C \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0435 \u2013 Monolid - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A", "description": "\u041A\u0443\u043F\u0438\u0442\u0435 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043D\u0430 \u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u043C \u0420\u044B\u043D\u043A\u0435 \u0432 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A\u0435 \u041F\u043E \u0421\u0430\u043C\u044B\u043C \u0412\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0426\u0435\u043D\u0430\u043C", "data-astro-cid-65bwhtiv": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-65bwhtiv": true }), renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-65bwhtiv": true }, { "separator": ($$result2) => renderTemplate`<svg width="12" height="12" data-astro-cid-65bwhtiv> <text x="3" y="12" fill="#6c757d" font-size="18" font-family="Arial" unicode-bidi="embed" data-astro-cid-65bwhtiv>•</text> </svg>` }), sanityVtorichka?.length > 0 && renderTemplate`<section aria-labelledby="layouts__title" class="section__layouts" data-astro-cid-65bwhtiv> <div class="container" data-astro-cid-65bwhtiv> <ul class="masonry__grid" data-astro-cid-65bwhtiv> ${sanityVtorichka?.map((item) => renderTemplate`<div class="grid__item" data-astro-cid-65bwhtiv> <div class="swiper" data-astro-cid-65bwhtiv> <div class="swiper-wrapper" data-astro-cid-65bwhtiv> ${item.photo?.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-65bwhtiv> <img width="300" height="300" loading="lazy" class="slide__img"${addAttribute(urlForImage(image).format("webp").width(300).height(300).url(), "src")} alt="квартира" data-astro-cid-65bwhtiv> <div class="swiper-lazy-preloader" data-astro-cid-65bwhtiv></div> </div>`)} </div> <button class="swiper-prev" data-astro-cid-bbe6dxrz="" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-101036693d872da023" data-astro-cid-65bwhtiv><svg width="20" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz="" data-astro-cid-65bwhtiv><path d="M3.36609 9.11615L7.79492 4.68732C8.03902 4.44322 8.35891 4.32119 8.67883 4.32119C8.99875 4.32119 9.31863 4.44322 9.56273 4.68732C10.0509 5.17548 10.0509 5.96693 9.56273 6.45509L7.26777 8.75001L21.75 8.75001C22.4404 8.75001 23 9.30966 23 10C23 10.6904 22.4404 11.25 21.75 11.25L7.26777 11.25L9.56273 13.5449C10.0509 14.0331 10.0509 14.8245 9.56273 15.3127C9.07453 15.8009 8.28312 15.8009 7.79492 15.3127L3.36609 10.8839C2.87797 10.3958 2.87797 9.60427 3.36609 9.11615Z" fill="white" data-astro-cid-bbe6dxrz="" data-astro-cid-65bwhtiv></path></svg></button> <button class="swiper-next" data-astro-cid-bbe6dxrz="" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-8fe5a295cce209f6" data-astro-cid-65bwhtiv><svg width="20" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz="" data-astro-cid-65bwhtiv><path d="M20.6339 10.8839L16.2051 15.3127C15.961 15.5568 15.6411 15.6788 15.3212 15.6788C15.0013 15.6788 14.6814 15.5568 14.4373 15.3127C13.9491 14.8245 13.9491 14.0331 14.4373 13.5449L16.7322 11.25H2.25C1.55965 11.25 1 10.6903 1 9.99999C1 9.30963 1.55965 8.74999 2.25 8.74999H16.7322L14.4373 6.45506C13.9491 5.9669 13.9491 5.17545 14.4373 4.68729C14.9255 4.19913 15.7169 4.19913 16.2051 4.68729L20.6339 9.11612C21.122 9.60424 21.122 10.3957 20.6339 10.8839Z" fill="white" data-astro-cid-bbe6dxrz="" data-astro-cid-65bwhtiv></path></svg></button> <div class="swiper-pagination" data-astro-cid-65bwhtiv></div> </div> <div class="swiper2-container" data-astro-cid-65bwhtiv> <div class="swiper2" data-astro-cid-65bwhtiv> <div class="swiper-wrapper" data-astro-cid-65bwhtiv> ${item.photo?.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-65bwhtiv> <img loading="lazy" class="slide__img"${addAttribute(urlForImage(image).format("webp").width(100).height(100).url(), "src")} alt="квартира" data-astro-cid-65bwhtiv> <div class="swiper-lazy-preloader" data-astro-cid-65bwhtiv></div> </div>`)} </div> </div> </div> <div class="layouts__texts" data-astro-cid-65bwhtiv> ${item.isAvailable == false && renderTemplate`<img class="soldout" src="/9OAAAgOqL-A-1920.webp" alt="Продана квартира" data-astro-cid-65bwhtiv>`} <p class="rooms" data-astro-cid-65bwhtiv>${item.rooms !== "\u0417\u0435\u043C\u043B\u044F" ? item.rooms + " \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430" : item.rooms}</p> <div class="description__wrapper" data-astro-cid-65bwhtiv> <div class="description" data-astro-cid-65bwhtiv> ${renderComponent($$result, "PortableTextBody", $$PortableTextBody, { "body": item.description, "components": myPortableTextComponents, "data-astro-cid-65bwhtiv": true })} </div> </div> <p class="price" data-astro-cid-65bwhtiv>${item.price} руб.</p> <button${addAttribute(item.isAvailable == false ? true : false, "disabled")}${addAttribute(item.rooms, "data-objectName")}${addAttribute(item.price + " \u0440\u0443\u0431.", "data-objectPrice")} class="apartment__booking" data-astro-cid-65bwhtiv>Подробнее</button> </div> </div>
                                            <div class="vtorichka-modal" data-astro-cid-65bwhtiv></div>`)} </ul> <button id="show-more-btn" data-astro-cid-65bwhtiv>Показать больше</button> </div> </section>`, renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-65bwhtiv": true }));
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/pages/vtorichka.astro", void 0);

const $$file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/pages/vtorichka.astro";
const $$url = "/vtorichka";

const vtorichka = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Vtorichka,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PortableTextBody as $, myPortableTextComponents as m, vtorichka as v };
