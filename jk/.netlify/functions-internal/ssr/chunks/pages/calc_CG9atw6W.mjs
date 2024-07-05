import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './404_CLEYKTc3.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, i as renderSlot, j as renderComponent, u as unescapeHTML, l as Fragment, k as renderHead } from '../astro_7hprNihR.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                         */

const schemaJson = (parts) => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: parts.map((part, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": part.href,
      name: part.text
    }
  }))
});

const findSeparator = (slug) => {
  const separators = ["-", "_"];
  for (const separator of separators) {
    if (slug.includes(separator)) {
      return separator;
    }
  }
};
const unSlugTrimmed = (slug) => {
  const separator = findSeparator(slug);
  if (separator) {
    return slug.split(separator).join(" ").trim();
  }
  return slug;
};
const formatLinkText = (slug, format) => {
  const slugToFormat = unSlugTrimmed(slug);
  switch (format) {
    case "lower":
      return slugToFormat.toLowerCase();
    case "capitalized":
      return slugToFormat.split(" ").map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(" ");
    case "sentence":
      return slugToFormat.charAt(0).toUpperCase() + slugToFormat.slice(1);
    default:
      return slug;
  }
};

const generateCrumbs = ({
  crumbs,
  paths,
  indexText,
  hasTrailingSlash,
  linkTextFormat,
  customBaseUrl
}) => {
  if (crumbs && crumbs?.length > 0) {
    return crumbs;
  }
  const parts = [];
  const baseUrl = "/";
  if (customBaseUrl) {
    paths.unshift(customBaseUrl);
  }
  paths.forEach((text, index) => {
    const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
    const addTrailingSlash = hasTrailingSlash ? `${generateHref}/` : generateHref;
    const finalHref = addTrailingSlash;
    const matches = text.match(/^(.+?)(\.[a-z0-9]+)?\/?$/i);
    if (matches && matches[2]) {
      text = matches[1];
    }
    parts.push({
      text: formatLinkText(text, linkTextFormat),
      href: finalHref
    });
  });
  if (!customBaseUrl) {
    parts.unshift({
      text: indexText,
      href: baseUrl
    });
  }
  parts[0] = {
    text: indexText,
    href: parts[0]?.href
  };
  return parts;
};

const $$Astro$3 = createAstro("https://monolid74.com/");
const $$BreadcrumbLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BreadcrumbLink;
  const { attrs, mainBemClass, isIndex, isCurrent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(attrs)}${addAttribute(`${mainBemClass}__link${isCurrent ? " is-current" : ""}${isIndex ? " is-index" : ""}`, "class")}${addAttribute(isCurrent ? "location" : false, "aria-current")}> ${renderSlot($$result, $$slots["index"])} </a>`;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/node_modules/astro-breadcrumbs/src/BreadcrumbLink.astro", void 0);

const $$Astro$2 = createAstro("https://monolid74.com/");
const $$BreadcrumbSeparator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BreadcrumbSeparator;
  return renderTemplate`${maybeRenderHead()}<span class="c-breadcrumbs__separator" aria-hidden="true"> ${renderSlot($$result, $$slots["separator"])} </span>`;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/node_modules/astro-breadcrumbs/src/BreadcrumbSeparator.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://monolid74.com/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const {
    indexText = "Home",
    mainBemClass = "c-breadcrumbs",
    ariaLabel = "breadcrumbs",
    crumbs = [],
    schemaJsonScript = true,
    ellipsisAriaLabel = "Show hidden navigation",
    truncated = false,
    linkTextFormat,
    customBaseUrl
  } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((crumb) => crumb);
  const hasTrailingSlash = Astro2.url.pathname.endsWith("/");
  const pathLength = paths?.length;
  const UUID = crypto.randomUUID();
  const parts = generateCrumbs({
    crumbs,
    paths,
    indexText,
    hasTrailingSlash,
    linkTextFormat,
    customBaseUrl
  });
  const isLastElement = (index, array) => index + 1 === array.length;
  return renderTemplate`${renderComponent($$result, "astro-breadcrumbs", "astro-breadcrumbs", { "data-main-bem-class": mainBemClass, "data-id": UUID, "data-path-length": pathLength, "data-truncated": truncated }, { "default": () => renderTemplate` ${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(mainBemClass, "class")}${addAttribute(UUID, "id")}> <ol${addAttribute(`${mainBemClass}__crumbs${Astro2.slots.has("separator") ? " has-separators" : " has-no-separators"}`, "class")}> ${parts.map(({ text, ...attrs }, index, array) => {
    const lastElement = isLastElement(index, array);
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index === 1 && pathLength > 1 && truncated && renderTemplate`<li${addAttribute(`${mainBemClass}__crumb has-ellipsis`, "class")}> <button type="button"${addAttribute(ellipsisAriaLabel, "aria-label")}${addAttribute(`${mainBemClass}__truncated-button`, "class")}> ${renderSlot($$result2, $$slots["ellipsis"], renderTemplate`…`)} </button> ${renderComponent($$result2, "BreadcrumbSeparator", $$BreadcrumbSeparator, {}, { "seperator": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["separator"])}` })} </li>`}<li${addAttribute(`${mainBemClass}__crumb`, "class")}> ${renderComponent($$result2, "BreadcrumbLink", $$BreadcrumbLink, { "attrs": attrs, "mainBemClass": mainBemClass, "isIndex": index === 0, "isCurrent": lastElement }, { "index": ($$result3) => renderTemplate`${Astro2.slots.has("index") && index === 0 ? renderTemplate`${renderSlot($$result3, $$slots["index"])}` : text}` })} ${Astro2.slots.has("separator") && !lastElement && renderTemplate`${renderComponent($$result2, "BreadcrumbSeparator", $$BreadcrumbSeparator, {}, { "separator": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["separator"])}` })}`} </li> ` })}`;
  })} </ol> </nav> ` })} ${schemaJsonScript && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson(parts)))} `;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/node_modules/astro-breadcrumbs/src/Breadcrumbs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://monolid74.com/");
const $$Calc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calc;
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u0418\u043F\u043E\u0442\u0435\u0447\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
      href: "/calc/"
    }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="ru" data-astro-cid-bh23rksi> <head>', '<script defer src="https://calcus.ru/dist/widget.js"><\/script>', '</head> <body data-astro-cid-bh23rksi> <div class="wrapper" data-astro-cid-bh23rksi> ', ' <div class="breadcrumbs__container" data-astro-cid-bh23rksi> <div class="c-breadcrumbs" data-astro-cid-bh23rksi>', ' </div> </div> <main data-astro-cid-bh23rksi> <section id="ourServices" aria-labelledby="calc__title" data-astro-cid-bh23rksi> <div class="container" data-astro-cid-bh23rksi> <h1 id="calc__title" data-astro-cid-bh23rksi>\u0418\u043F\u043E\u0442\u0435\u0447\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440</h1> <div id="calcus-container" data-astro-cid-bh23rksi></div>  </div> </section> </main> ', " </div>  </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u0418\u043F\u043E\u0442\u0435\u0447\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u2013 Monolid - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A", "description": "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u043F\u043E\u0442\u0435\u043A\u0443 \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u043C\u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u043C\u0438 \u0438 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u043C \u043D\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446", "data-astro-cid-bh23rksi": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bh23rksi": true }), renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-bh23rksi": true }, { "separator": ($$result2) => renderTemplate`<svg width="12" height="12" data-astro-cid-bh23rksi> <text x="3" y="12" fill="#6c757d" font-size="18" font-family="Arial" unicode-bidi="embed" data-astro-cid-bh23rksi>•</text> </svg>` }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bh23rksi": true }));
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/pages/calc.astro", void 0);

const $$file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/pages/calc.astro";
const $$url = "/calc";

const calc = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Breadcrumbs as $, calc as c };
