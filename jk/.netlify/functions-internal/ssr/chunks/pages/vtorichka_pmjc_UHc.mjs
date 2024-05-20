import { s as sanityClient, $ as $$Footer, a as $$Header, b as $$BaseHead } from './404_CdorIU_e.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, h as addAttribute, k as renderHead } from '../astro_7hprNihR.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './calc_Bb5EESYt.mjs';
/* empty css                           */
/* empty css                          */
import imageUrlBuilder from '@sanity/image-url';
/* empty css                              */

async function getSanity(query) {
    const response = await sanityClient.fetch(query);
    return response
}

const imageBuilder = imageUrlBuilder(sanityClient);


function urlForImage(source) {
    return imageBuilder.image(source)
}

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
    watchSlidesProgress: true,
    thumbs: {
        swiper: swiper2,
      },
    });
});





<\/script></body></html>`])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u041A\u0443\u043F\u0438\u0442\u044C \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0435 \u2013 Monolid - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A", "description": "\u041A\u0443\u043F\u0438\u0442\u0435 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043D\u0430 \u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u043C \u0420\u044B\u043D\u043A\u0435 \u0432 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A\u0435 \u041F\u043E \u0421\u0430\u043C\u044B\u043C \u0412\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0426\u0435\u043D\u0430\u043C", "data-astro-cid-65bwhtiv": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-65bwhtiv": true }), renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-65bwhtiv": true }, { "separator": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-65bwhtiv><polyline points="9 18 15 12 9 6" data-astro-cid-65bwhtiv></polyline> </svg>` }), sanityVtorichka?.length > 0 && renderTemplate`<section aria-labelledby="layouts__title" class="section__layouts" data-astro-cid-65bwhtiv> <div class="container" data-astro-cid-65bwhtiv> <ul class="masonry__grid" data-astro-cid-65bwhtiv> ${sanityVtorichka?.map((item) => renderTemplate`<div class="grid__item" data-astro-cid-65bwhtiv> <div class="swiper" data-astro-cid-65bwhtiv> <div class="swiper-wrapper" data-astro-cid-65bwhtiv> ${item.photo?.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-65bwhtiv> <img loading="lazy" class="slide__img"${addAttribute(urlForImage(image).url(), "src")}${addAttribute(sanityVtorichka.rooms, "alt")} data-astro-cid-65bwhtiv> </div>`)} </div> <div class="swiper-pagination" data-astro-cid-65bwhtiv></div> </div> <div class="swiper2-container" data-astro-cid-65bwhtiv> <div class="swiper2" data-astro-cid-65bwhtiv> <div class="swiper-wrapper" data-astro-cid-65bwhtiv> ${item.photo?.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-65bwhtiv> <img loading="lazy" class="slide__img"${addAttribute(urlForImage(image).url(), "src")}${addAttribute(sanityVtorichka.rooms, "alt")} data-astro-cid-65bwhtiv> </div>`)} </div> </div> </div> <div class="layouts__texts" data-astro-cid-65bwhtiv> <p class="rooms" data-astro-cid-65bwhtiv>${item.rooms} квартира</p> <div class="description__wrapper" data-astro-cid-65bwhtiv> <div class="description" data-astro-cid-65bwhtiv>${item.description}</div></div> <p class="price" data-astro-cid-65bwhtiv>от ${item.price} руб.</p> <button${addAttribute(item.rooms, "data-objectName")}${addAttribute(item.price + " \u0440\u0443\u0431.", "data-objectPrice")} class="apartment__booking" data-astro-cid-65bwhtiv>Подробнее</button> </div> </div>
                                            <div class="vtorichka-modal" data-astro-cid-65bwhtiv></div>`)} </ul> <button id="show-more-btn" data-astro-cid-65bwhtiv>Показать больше</button> </div> </section>`, renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-65bwhtiv": true }));
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/pages/vtorichka.astro", void 0);

const $$file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/pages/vtorichka.astro";
const $$url = "/vtorichka";

const vtorichka = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Vtorichka,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getSanity as g, urlForImage as u, vtorichka as v };
