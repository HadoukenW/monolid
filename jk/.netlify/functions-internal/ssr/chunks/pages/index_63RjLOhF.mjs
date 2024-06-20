import { s as sanityClient, b as $$BaseHead, a as $$Header, $ as $$Footer, c as $$Image } from './404_BhtdxE-O.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, k as renderHead, h as addAttribute, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML, m as maybeRenderHead } from '../astro_7hprNihR.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './calc_8w-8Nmqw.mjs';
/* empty css                           */
import imageUrlBuilder from '@sanity/image-url';
/* empty css                          */
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './contacts_BhO2SoGm.mjs';
/* empty css                          */
/* empty css                          */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                          */
import 'clsx';

async function getSanity(query) {
    const response = await sanityClient.fetch(query);
    return response
}

const imageBuilder = imageUrlBuilder(sanityClient);


function urlForImage(source) {
    return imageBuilder.image(source)
}

const $$Astro$8 = createAstro("https://monolid74.com/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$2;
  const blogs = await getSanity(`*[_type == "blog"]{
    seo,
    image,
    blogTitle,
    blogSlug,
    blogDescription,
    addedAt,
}`);
  const blogsSorted = blogs.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      href: "/blog/"
    }
  ];
  return renderTemplate`<html lang="ru" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 - Monolid - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A", "description": "", "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> <div class="wrapper" data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <div class="breadcrumbs__container" data-astro-cid-5tznm7mj> <div class="c-breadcrumbs" data-astro-cid-5tznm7mj>${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-5tznm7mj": true }, { "separator": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5tznm7mj><polyline points="9 18 15 12 9 6" data-astro-cid-5tznm7mj></polyline> </svg>` })} </div> </div> <main data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <h1 id="blog__title" data-astro-cid-5tznm7mj>Новости недвижимости</h1> <div class="blog__big-wrapper" data-astro-cid-5tznm7mj> <a class="blog__big-item"${addAttribute(`/blog/${blogsSorted[0].blogSlug.current}`, "href")} data-astro-cid-5tznm7mj> <div class="blog__big-card" data-astro-cid-5tznm7mj> <div class="blog__big-img" data-astro-cid-5tznm7mj> <img${addAttribute(urlForImage(blogsSorted[0].image).url(), "src")} alt="blog__img" data-astro-cid-5tznm7mj> </div> <div class="blog__card-big-info" data-astro-cid-5tznm7mj> <div data-astro-cid-5tznm7mj> <h3 class="blog__big-title" data-astro-cid-5tznm7mj>${blogsSorted[0].blogTitle}</h3> <div class="blog__big-description" data-astro-cid-5tznm7mj> ${blogsSorted[0].blogDescription[0].children.map((desc) => renderTemplate`<span data-astro-cid-5tznm7mj>${desc.text}</span>`)} </div> </div> <p class="blog__big-date" data-astro-cid-5tznm7mj>${new Date(blogsSorted[0].addedAt).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}</p> </div> </div> </a> </div> <div class="blog__wrapper" data-astro-cid-5tznm7mj> ${blogsSorted && blogsSorted.slice(1).map((blog) => renderTemplate`<a class="blog__item"${addAttribute(`/blog/${blog.blogSlug.current}`, "href")} data-astro-cid-5tznm7mj> <div class="blog__card" data-astro-cid-5tznm7mj> <div class="blog__img" data-astro-cid-5tznm7mj> <img${addAttribute(urlForImage(blog.image).url(), "src")} alt="blog__img" data-astro-cid-5tznm7mj> </div> <div class="blog__card-info" data-astro-cid-5tznm7mj> <h3 class="blog__title" data-astro-cid-5tznm7mj>${blog.blogTitle}</h3> <p class="blog__date" data-astro-cid-5tznm7mj>${new Date(blog.addedAt).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}</p> </div> </div> </a>`)} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </div> </body></html>`;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/pages/blog/index.astro", void 0);

const $$file$2 = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://monolid74.com/", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/catalog/fanpark.md": () => import('../fanpark_D42gFjRA.mjs'),"/src/content/catalog/zhk-akadem-riverside-14-dom.mdx": () => import('../zhk-akadem-riverside-14-dom_rmJHlKGr.mjs'),"/src/content/catalog/zhk-akadem-riverside-18-dom.md": () => import('../zhk-akadem-riverside-18-dom_DsGUiYAw.mjs'),"/src/content/catalog/zhk-akadem-riverside-81-1-dom.md": () => import('../zhk-akadem-riverside-81-1-dom_zCiH9mLa.mjs'),"/src/content/catalog/zhk-akadem-riverside-81-2-dom.md": () => import('../zhk-akadem-riverside-81-2-dom_B6k3BJ0H.mjs'),"/src/content/catalog/zhk-bratiev-kashirinyh.mdx": () => import('../zhk-bratiev-kashirinyh_BcQd9MTs.mjs'),"/src/content/catalog/zhk-estetika.md": () => import('../zhk-estetika_DH0tQIml.mjs'),"/src/content/catalog/zhk-evropeiskii2.md": () => import('../zhk-evropeiskii2_m94yrb8-.mjs'),"/src/content/catalog/zhk-klever.md": () => import('../zhk-klever_CRfKy166.mjs'),"/src/content/catalog/zhk-konfetti.md": () => import('../zhk-konfetti_DlGQ4Z8E.mjs'),"/src/content/catalog/zhk-korolenko.md": () => import('../zhk-korolenko_DlrLwdx7.mjs'),"/src/content/catalog/zhk-malevich.md": () => import('../zhk-malevich_C47527af.mjs'),"/src/content/catalog/zhk-niks-city.md": () => import('../zhk-niks-city_C0jVDj_U.mjs'),"/src/content/catalog/zhk-niks-line.md": () => import('../zhk-niks-line_vEGIxRoZ.mjs'),"/src/content/catalog/zhk-niks-pro.md": () => import('../zhk-niks-pro_D4YmCg3C.mjs'),"/src/content/catalog/zhk-novil.md": () => import('../zhk-novil_zqkENoNc.mjs'),"/src/content/catalog/zhk-otkrytyi-gorod.md": () => import('../zhk-otkrytyi-gorod_Bo05TNuw.mjs'),"/src/content/catalog/zhk-shishkin.md": () => import('../zhk-shishkin_BXx5TR_T.mjs'),"/src/content/catalog/zhk-sportivniy.mdx": () => import('../zhk-sportivniy_7AQ4kvqr.mjs'),"/src/content/catalog/zhk-vidniy.md": () => import('../zhk-vidniy_FkO4_BiM.mjs'),"/src/content/homepage/hero-1.md": () => import('../hero-1_TGmYeV07.mjs'),"/src/content/homepage/hero-10.md": () => import('../hero-10_txbAwQAn.mjs'),"/src/content/homepage/hero-11.md": () => import('../hero-11_D9JWr1F9.mjs'),"/src/content/homepage/hero-12.md": () => import('../hero-12_BFl5kCqC.mjs'),"/src/content/homepage/hero-2.md": () => import('../hero-2_BjLBVKyb.mjs'),"/src/content/homepage/hero-3.md": () => import('../hero-3_BrIPOrbd.mjs'),"/src/content/homepage/hero-4.md": () => import('../hero-4_BFDmarvd.mjs'),"/src/content/homepage/hero-5.md": () => import('../hero-5_CC1tX-e3.mjs'),"/src/content/homepage/hero-6.md": () => import('../hero-6_DVYtltha.mjs'),"/src/content/homepage/hero-7.md": () => import('../hero-7_C9QpNTHP.mjs'),"/src/content/homepage/hero-8.md": () => import('../hero-8_CCGstdTp.mjs'),"/src/content/homepage/hero-9.md": () => import('../hero-9_Cc50ukSp.mjs'),"/src/content/newBuildings/building-1.md": () => import('../building-1_DDpuFbCF.mjs'),"/src/content/newBuildings/building-2.md": () => import('../building-2_BY-i1DWs.mjs'),"/src/content/newBuildings/building-3.md": () => import('../building-3_DcuYVlA1.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"catalog":{"type":"content","entries":{"fanpark":"/src/content/catalog/fanpark.md","zhk-akadem-riverside-14-dom":"/src/content/catalog/zhk-akadem-riverside-14-dom.mdx","zhk-akadem-riverside-18-dom":"/src/content/catalog/zhk-akadem-riverside-18-dom.md","zhk-akadem-riverside-81-1-dom":"/src/content/catalog/zhk-akadem-riverside-81-1-dom.md","zhk-akadem-riverside-81-2-dom":"/src/content/catalog/zhk-akadem-riverside-81-2-dom.md","zhk-bratiev-kashirinyh":"/src/content/catalog/zhk-bratiev-kashirinyh.mdx","zhk-estetika":"/src/content/catalog/zhk-estetika.md","zhk-evropeiskii2":"/src/content/catalog/zhk-evropeiskii2.md","zhk-klever":"/src/content/catalog/zhk-klever.md","zhk-konfetti":"/src/content/catalog/zhk-konfetti.md","zhk-korolenko":"/src/content/catalog/zhk-korolenko.md","zhk-malevich":"/src/content/catalog/zhk-malevich.md","zhk-niks-city":"/src/content/catalog/zhk-niks-city.md","zhk-niks-line":"/src/content/catalog/zhk-niks-line.md","zhk-niks-pro":"/src/content/catalog/zhk-niks-pro.md","zhk-novil":"/src/content/catalog/zhk-novil.md","zhk-otkrytyi-gorod":"/src/content/catalog/zhk-otkrytyi-gorod.md","zhk-shishkin":"/src/content/catalog/zhk-shishkin.md","zhk-sportivniy":"/src/content/catalog/zhk-sportivniy.mdx","zhk-vidniy":"/src/content/catalog/zhk-vidniy.md"}},"homepage":{"type":"content","entries":{"hero-1":"/src/content/homepage/hero-1.md","hero-10":"/src/content/homepage/hero-10.md","hero-11":"/src/content/homepage/hero-11.md","hero-12":"/src/content/homepage/hero-12.md","hero-2":"/src/content/homepage/hero-2.md","hero-3":"/src/content/homepage/hero-3.md","hero-4":"/src/content/homepage/hero-4.md","hero-5":"/src/content/homepage/hero-5.md","hero-6":"/src/content/homepage/hero-6.md","hero-7":"/src/content/homepage/hero-7.md","hero-8":"/src/content/homepage/hero-8.md","hero-9":"/src/content/homepage/hero-9.md"}},"newBuildings":{"type":"content","entries":{"building-1":"/src/content/newBuildings/building-1.md","building-2":"/src/content/newBuildings/building-2.md","building-3":"/src/content/newBuildings/building-3.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/catalog/fanpark.md": () => import('../fanpark_BCjxJKSJ.mjs'),"/src/content/catalog/zhk-akadem-riverside-14-dom.mdx": () => import('../zhk-akadem-riverside-14-dom_qHnpJWOo.mjs'),"/src/content/catalog/zhk-akadem-riverside-18-dom.md": () => import('../zhk-akadem-riverside-18-dom_Cb9VVtF5.mjs'),"/src/content/catalog/zhk-akadem-riverside-81-1-dom.md": () => import('../zhk-akadem-riverside-81-1-dom_BGOJJY87.mjs'),"/src/content/catalog/zhk-akadem-riverside-81-2-dom.md": () => import('../zhk-akadem-riverside-81-2-dom_CE4tHr-g.mjs'),"/src/content/catalog/zhk-bratiev-kashirinyh.mdx": () => import('../zhk-bratiev-kashirinyh_DsZ3dOi-.mjs'),"/src/content/catalog/zhk-estetika.md": () => import('../zhk-estetika_COMB-HG7.mjs'),"/src/content/catalog/zhk-evropeiskii2.md": () => import('../zhk-evropeiskii2_pWHIIlBU.mjs'),"/src/content/catalog/zhk-klever.md": () => import('../zhk-klever_CJBxHhAg.mjs'),"/src/content/catalog/zhk-konfetti.md": () => import('../zhk-konfetti_C3fvvHsY.mjs'),"/src/content/catalog/zhk-korolenko.md": () => import('../zhk-korolenko_C8Sgh9gp.mjs'),"/src/content/catalog/zhk-malevich.md": () => import('../zhk-malevich_DnmhDemJ.mjs'),"/src/content/catalog/zhk-niks-city.md": () => import('../zhk-niks-city_D6OUOHRi.mjs'),"/src/content/catalog/zhk-niks-line.md": () => import('../zhk-niks-line_IPL22pHF.mjs'),"/src/content/catalog/zhk-niks-pro.md": () => import('../zhk-niks-pro_ByPrwJT8.mjs'),"/src/content/catalog/zhk-novil.md": () => import('../zhk-novil_C1d38Sgt.mjs'),"/src/content/catalog/zhk-otkrytyi-gorod.md": () => import('../zhk-otkrytyi-gorod_BOO5cM6d.mjs'),"/src/content/catalog/zhk-shishkin.md": () => import('../zhk-shishkin_D2BKZCsu.mjs'),"/src/content/catalog/zhk-sportivniy.mdx": () => import('../zhk-sportivniy_NH_siQB9.mjs'),"/src/content/catalog/zhk-vidniy.md": () => import('../zhk-vidniy_BMxM0HKC.mjs'),"/src/content/homepage/hero-1.md": () => import('../hero-1_CUDISUB9.mjs'),"/src/content/homepage/hero-10.md": () => import('../hero-10_CAQfjHAC.mjs'),"/src/content/homepage/hero-11.md": () => import('../hero-11_eegKHWqG.mjs'),"/src/content/homepage/hero-12.md": () => import('../hero-12_DfshF9yY.mjs'),"/src/content/homepage/hero-2.md": () => import('../hero-2_1EcVG3VD.mjs'),"/src/content/homepage/hero-3.md": () => import('../hero-3_DJWd6zAq.mjs'),"/src/content/homepage/hero-4.md": () => import('../hero-4_BU0gRnS3.mjs'),"/src/content/homepage/hero-5.md": () => import('../hero-5_BWXcfU4H.mjs'),"/src/content/homepage/hero-6.md": () => import('../hero-6_DGfmp27P.mjs'),"/src/content/homepage/hero-7.md": () => import('../hero-7_Wg3SLyZH.mjs'),"/src/content/homepage/hero-8.md": () => import('../hero-8_DNflBygn.mjs'),"/src/content/homepage/hero-9.md": () => import('../hero-9_CvM7Q3e9.mjs'),"/src/content/newBuildings/building-1.md": () => import('../building-1_D9iB3QdT.mjs'),"/src/content/newBuildings/building-2.md": () => import('../building-2_DYt7mOK6.mjs'),"/src/content/newBuildings/building-3.md": () => import('../building-3_Br2tPUz_.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$7 = createAstro("https://monolid74.com/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("catalog")).sort(
    (a, b) => a?.data?.year?.valueOf() - b?.data?.year?.valueOf()
  );
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
      href: "/catalog/"
    }
  ];
  return renderTemplate`<html lang="ru" data-astro-cid-ov45w7vr> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0435\u043A \u2013 Monolid - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A", "description": SITE_DESCRIPTION, "websiteType": "article", "data-astro-cid-ov45w7vr": true })}${renderHead()}</head> <body data-astro-cid-ov45w7vr> <div class="wrapper" data-astro-cid-ov45w7vr> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ov45w7vr": true })} <div class="breadcrumbs__container" data-astro-cid-ov45w7vr>${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs, "data-astro-cid-ov45w7vr": true }, { "separator": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ov45w7vr><polyline points="9 18 15 12 9 6" data-astro-cid-ov45w7vr></polyline> </svg>` })}</div> <main data-astro-cid-ov45w7vr> <section aria-labelledby="catalog__title" data-astro-cid-ov45w7vr> <h1 id="catalog__title" data-astro-cid-ov45w7vr>Каталог новостроек</h1> <div class="container" data-astro-cid-ov45w7vr> <ul data-astro-cid-ov45w7vr> ${posts?.map((post) => renderTemplate`<li itemscope itemtype="https://schema.org/Accommodation" class="div_anim" data-astro-cid-ov45w7vr> <meta itemprop="yearBuilt"${addAttribute(post.data.year, "content")}> <div class="card__item" itemscope itemtype="https://schema.org/ApartmentComplex"${addAttribute(post.data.title, "aria-label")} data-astro-cid-ov45w7vr> <article data-astro-cid-ov45w7vr> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "itemprop": "image", "src": post?.data?.heroImage, "alt": post?.data?.title, "data-astro-cid-ov45w7vr": true })} <div class="text__box div_anim" data-astro-cid-ov45w7vr> <h2 itemprop="name" data-astro-cid-ov45w7vr>${post.data.title}</h2> <div class="newBuildings__wrapper" data-astro-cid-ov45w7vr> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ov45w7vr> <path d="M7.70538 0C4.67267 0 2.20538 2.59944 2.20538 5.79456C2.20538 9.75981 7.12734 15.581 7.3369 15.8269C7.53373 16.0579 7.87739 16.0575 8.07387 15.8269C8.28342 15.581 13.2054 9.75981 13.2054 5.79456C13.2053 2.59944 10.7381 0 7.70538 0ZM7.70538 8.70997C6.17955 8.70997 4.93822 7.40212 4.93822 5.79456C4.93822 4.187 6.17958 2.87919 7.70538 2.87919C9.23119 2.87919 10.4725 4.18703 10.4725 5.79459C10.4725 7.40216 9.23119 8.70997 7.70538 8.70997Z" fill="#1C244B" data-astro-cid-ov45w7vr></path> </svg> <p data-astro-cid-ov45w7vr>${post.data.location}</p> <div class="visually-hidden" itemscope itemtype="https://schema.org/PostalAddress" data-astro-cid-ov45w7vr> <meta itemprop="addressLocality" content="Челябинск"> <meta itemprop="addressRegion" content="Челябинская область"> <meta itemprop="telephone" content="89642409046"> </div> </div> <div class="newBuildings__wrapper" data-astro-cid-ov45w7vr> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ov45w7vr> <path d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z" fill="#1C244B" data-astro-cid-ov45w7vr></path> <path d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z" fill="#1C244B" data-astro-cid-ov45w7vr></path> </svg> <p data-astro-cid-ov45w7vr>${post.data.year}</p> </div> <div class="newBuildings__wrapper" data-astro-cid-ov45w7vr> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ov45w7vr> <path d="M13.6 14.4V0H2.4V14.4H0.799988V16H15.2V14.4H13.6ZM7.2 1.60001H8.80001V3.20002H7.2V1.60001ZM7.2 4.8H8.80001V6.40001H7.2V4.8ZM7.2 7.99998H8.80001V9.59999H7.2V7.99998ZM5.59998 9.59999H3.99997V7.99998H5.59998V9.59999ZM5.59998 6.40001H3.99997V4.8H5.59998V6.40001ZM5.59998 3.19999H3.99997V1.60001H5.59998V3.19999ZM9.59999 14.4H6.40001V12.8C6.40001 11.92 7.12001 11.2 8.00002 11.2C8.88003 11.2 9.59999 11.92 9.59999 12.8V14.4ZM12 9.59999H10.4V7.99998H12V9.59999ZM12 6.40001H10.4V4.8H12V6.40001ZM12 3.19999H10.4V1.60001H12V3.19999Z" fill="#1C244B" data-astro-cid-ov45w7vr></path> </svg> <p data-astro-cid-ov45w7vr>${post.data.buildingType}</p> </div> <a itemprop="url"${addAttribute(`/catalog/${post.slug}/`, "href")} data-astro-cid-ov45w7vr>Подробнее</a> </div> </article> ${post.data.isInProgress && renderTemplate`<div class="inProgress" data-astro-cid-ov45w7vr>${post.data.isInProgress}</div>`} </div> </li>`)} </ul> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ov45w7vr": true })} </div>  </body></html>`;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/pages/catalog/index.astro", void 0);

const $$file$1 = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/pages/catalog/index.astro";
const $$url$1 = "/catalog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://monolid74.com/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const posts = await getCollection("homepage");
  return renderTemplate(_a || (_a = __template(["", '<section data-astro-cid-bbe6dxrz> <h1 class="visually-hidden" data-astro-cid-bbe6dxrz>\u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 MonoliD</h1> <div class="swiper" data-astro-cid-bbe6dxrz> <div class="swiper-wrapper" data-astro-cid-bbe6dxrz> ', ` </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-bbe6dxrz></div> <!-- If we need navigation buttons --> </div> </section>  <script type="module">
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
  
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

    autoplay: {
        delay: 5000,
    },

  effect: "fade",
  


})



<\/script>`])), maybeRenderHead(), posts.map((post) => renderTemplate`<div class="swiper-slide" data-astro-cid-bbe6dxrz> <div class="slide__texts" data-astro-cid-bbe6dxrz> <p class="slide__title" data-astro-cid-bbe6dxrz>${post.data.title}</p> <p class="slide__text" data-astro-cid-bbe6dxrz>${post.data.description}</p> <div class="slide__btns" data-astro-cid-bbe6dxrz> <button class="swiper-prev" data-astro-cid-bbe6dxrz><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz><path d="M3.36609 9.11615L7.79492 4.68732C8.03902 4.44322 8.35891 4.32119 8.67883 4.32119C8.99875 4.32119 9.31863 4.44322 9.56273 4.68732C10.0509 5.17548 10.0509 5.96693 9.56273 6.45509L7.26777 8.75001L21.75 8.75001C22.4404 8.75001 23 9.30966 23 10C23 10.6904 22.4404 11.25 21.75 11.25L7.26777 11.25L9.56273 13.5449C10.0509 14.0331 10.0509 14.8245 9.56273 15.3127C9.07453 15.8009 8.28312 15.8009 7.79492 15.3127L3.36609 10.8839C2.87797 10.3958 2.87797 9.60427 3.36609 9.11615Z" fill="white" data-astro-cid-bbe6dxrz></path></svg></button> <button class="swiper-next" data-astro-cid-bbe6dxrz><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz><path d="M20.6339 10.8839L16.2051 15.3127C15.961 15.5568 15.6411 15.6788 15.3212 15.6788C15.0013 15.6788 14.6814 15.5568 14.4373 15.3127C13.9491 14.8245 13.9491 14.0331 14.4373 13.5449L16.7322 11.25H2.25C1.55965 11.25 1 10.6903 1 9.99999C1 9.30963 1.55965 8.74999 2.25 8.74999H16.7322L14.4373 6.45506C13.9491 5.9669 13.9491 5.17545 14.4373 4.68729C14.9255 4.19913 15.7169 4.19913 16.2051 4.68729L20.6339 9.11612C21.122 9.60424 21.122 10.3957 20.6339 10.8839Z" fill="white" data-astro-cid-bbe6dxrz></path></svg></button> </div> </div> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "class": "slide__img", "src": post.data.image, "alt": post.data.title, "data-astro-cid-bbe6dxrz": true })} </div>`));
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro("https://monolid74.com/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="about__title" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <h2 id="about__title" data-astro-cid-v2cbyr3p>О агентстве недвижимости MonoliD</h2> <p data-astro-cid-v2cbyr3p>Мы – агентство недвижимости MonoliD – являемся компанией, специализирующейся на продаже квартир в новостройках и вторичного жилья в Челябинске. Наша главная цель – обеспечить высокий уровень сервиса, профессионализм и индивидуальный подход к каждому клиенту.</p> <p class="about__listing-title" data-astro-cid-v2cbyr3p>Мы предлагаем широкий спектр услуг, включающий:</p> <ul class="about__wrapper" data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 501.9 501.9" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-v2cbyr3p><g data-astro-cid-v2cbyr3p><path d="M501.8 270.1c-.6-13.9-14.2-25-40.5-33-20.4-6.1-46.3-9.8-74.3-10.4V120c-.1-1.8-.6-3.5-1.5-5-2.8-12.1-16.3-21.9-40.2-29.1-22.5-6.8-51.9-10.5-82.8-10.5-30.8 0-59.9 3.7-82 10.5-18.1 5.6-39.8 16-39.8 33.9 0 1.1.1 2.2.3 3.3l1.1 45.6c-65-12.4-127.7 30.3-140 95.2C.7 271.3 0 278.7 0 286.2c0 66 53.7 119.7 119.7 119.7 27.5 0 54.1-9.4 75.4-26.8 18.7 4.4 40.7 6.8 64 7 5.1 27.7 65.1 40.4 121 40.4 30.8 0 59.9-3.8 82-10.7 18.1-5.6 39.8-16.1 39.8-34V272c0-.6 0-1.3-.1-1.9zm-135.7-94.8c0 1.3-4.8 8.2-26.5 14.8-20.3 6.1-48.4 9.7-77 9.7-24.7 0-48.9-2.6-68.1-7.5-.3-.1-.5-.1-.8-.2-9.5-7.5-20-13.5-31.3-17.7l-.7-28.2c6.9 3.5 14.1 6.3 21.6 8.3 21.7 6.3 49.8 9.7 79.3 9.7 30.8 0 60.3-3.7 82.8-10.5 7.5-2.2 14.8-5.1 21.7-8.7v26.2c-1.1 1.4-1 2.7-1 4.1zm-179.6-70.1c20.2-6.2 47.2-9.7 76-9.7 28.6 0 56.7 3.5 77 9.7 21.7 6.6 26.5 13.4 26.5 14.7 0 1.4-4.9 8.3-26.6 14.8-20.3 6.1-48.3 9.6-76.9 9.6-27.6 0-53.8-3.2-73.7-9-21.5-6.2-27.5-13-28-15.2 0-.2-.1-.2-.1-.2.1-1.9 4.7-8.3 25.8-14.7zm.3 254.8C146.1 397 83 394.1 46 353.4s-34.1-103.8 6.6-140.8c18.3-16.7 42.3-25.9 67.1-25.9 10 0 19.9 1.5 29.5 4.4 34.7 10.8 60.8 39.6 68.2 75.1 1.3 6.6 2 13.4 2 20.1.1 28.1-11.8 54.8-32.6 73.7zm25.4 2.2c8.1-9.9 14.6-21 19.2-32.9 8.5.7 17.3 1.2 26.5 1.3v1.8l.6 33.9c-15.5-.2-31-1.6-46.3-4.1zm26.7-87.8c5.8.4 11.9.6 18.1.7l.6 35.4c-7-.1-13.9-.4-20.5-.9 1.5-7.7 2.3-15.6 2.3-23.4 0-3.9-.2-7.8-.5-11.8zm24.6-19.2h-1c-9.6 0-18.9-.4-27.5-1-3.8-13.4-9.8-26-17.9-37.2 15 1.9 30.1 2.9 45.3 2.9 30.9 0 60.4-3.7 82.9-10.5 7.5-2.2 14.7-5.1 21.6-8.6V227c-42.9 1.2-87 10.2-103.4 28.2zm13.2 15.9c0-.1 0-.2.1-.4.9-2.7 8-9.3 28.7-15.1 19.4-5.5 44.7-8.5 71.3-8.5h1.7c28.6 0 56.6 3.3 77 9.5 21.3 6.4 26.3 13 26.4 14.5v.1c-.1 1.5-5.1 8.4-27.3 15-20.5 6.1-47.5 9.4-76 9.4-27.6 0-53.8-3.2-73.7-8.9-21.5-6.2-27.4-13.1-28-15.2l-.2-.4zm179.6 125.7c-20.2 6.3-47.3 9.8-76.1 9.8-28.9 0-55.9-3.4-75.9-9.5-21.1-6.5-25.5-13.2-25.5-14.7v-.2l-.5-29c8 3.9 16.3 6.9 24.9 9.1 21 5.5 47.7 8.6 75.1 8.6 30.9 0 60.2-3.7 82.6-10.5 7.3-2.2 14.3-5.1 21-8.5v30h.1c0 1.4-4.6 8.3-25.7 14.9zm25.8-73.6h-.1c0 1-.6 2.2-.6 3.3 0 1.4-4.7 8.2-26.3 14.8-20.5 6.2-47.8 9.6-76.7 9.6-55.4 0-92.7-12.5-100.5-22.2l-.1-8.4-.4-23c7 3.5 14.3 6.3 21.8 8.4 21.7 6.3 49.8 9.7 79.3 9.7 30.4 0 59.4-3.6 81.7-10.2 7.6-2.1 14.9-5 21.9-8.6v26.6z" fill="#000000" opacity="1" data-original="#000000" class="" data-astro-cid-v2cbyr3p></path><path d="M156.1 300.4c-4.6-16.3-19.5-27.5-36.4-27.5-9.8 0-17.8-7.9-17.8-17.7.1-9.9 8-17.8 17.8-17.8s17.8 8 17.8 17.8c0 5.5 4.5 10 10 10s10-4.5 10-10c0-16.9-11.2-31.8-27.5-36.4v-4.5c0-5.5-4.5-10-10-10s-10 4.5-10 10v4.3c-20.1 5.4-32.1 26.1-26.7 46.2 4.4 16.5 19.3 28 36.4 28 9.8 0 17.8 7.9 17.8 17.7s-7.9 17.8-17.7 17.8-17.8-7.9-17.8-17.7c0-5.5-4.5-10-10-10s-10 4.5-10 10c.1 17.1 11.5 32 28 36.5v8.7c0 5.5 4.5 10 10 10s10-4.5 10-10V347c20.1-5.7 31.8-26.5 26.1-46.6z" data-astro-cid-v2cbyr3p></path></g></svg> <h3 data-astro-cid-v2cbyr3p>Продажа квартир в новостройках</h3> <p data-astro-cid-v2cbyr3p>Мы сотрудничаем с ведущими застройщиками и предлагаем широкий выбор жилья в новых комплексах. Наша команда помогает клиентам с выбором оптимального варианта в соответствии с их потребностями и бюджетом.</p> </li> <li data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" width="96.654" height="96.352" viewBox="0 0 96.654 96.352" data-astro-cid-v2cbyr3p> <g id="Group_1789" data-name="Group 1789" transform="translate(-255.886 -375.023)" data-astro-cid-v2cbyr3p> <path id="Path_53618" data-name="Path 53618" d="M256.886,376.054h37.2c5.526,0,11.056-.128,16.573.085a7.394,7.394,0,0,1,4.441,1.807c5.172,4.892,10.182,9.96,15.14,15.072a5.689,5.689,0,0,1,1.639,3.416c.151,6.986.075,13.977.075,20.967l-1.095.383c-.53-1.453-1.468-2.893-1.516-4.361-.181-5.493-.072-10.995-.072-16.8H311.683V379.011h-52.3v86.565h69.672c.108-1.4.219-2.823.348-4.5,3.817,1.423,2.241,4.463,2.456,7.186H256.886Zm68.989,17.612-11.414-11.592v11.592Z" stroke="#000" stroke-width="2" data-astro-cid-v2cbyr3p></path> <path id="Path_53619" data-name="Path 53619" d="M339.344,462.95a20.315,20.315,0,0,1-15.556,2.714,19.58,19.58,0,1,1,22.525-11.321c-1.611,3.847.181,7.175,4.215,8.106a7.048,7.048,0,0,1,3.149,1.585c3.211,3.037,6.324,6.179,9.395,9.359,2.66,2.756,2.79,6.173.461,8.5-2.4,2.4-5.625,2.267-8.477-.486-3.181-3.069-6.462-6.07-9.328-9.419-1.964-2.3-3.271-5.149-4.927-7.718A8.063,8.063,0,0,0,339.344,462.95Zm-10.982-33.235a16.948,16.948,0,0,0-17.09,17.009A17.239,17.239,0,0,0,328.2,463.648,17,17,0,0,0,345.2,446.883,16.74,16.74,0,0,0,328.362,429.715Zm18,39.486c3.847,3.782,7.2,7.323,10.867,10.511a4.248,4.248,0,0,0,4.074.317c.763-.561,1.079-3.251.442-3.944-3.493-3.806-7.34-7.287-11.071-10.885Zm-.14-3.532,1.139-1.365-4.706-4.271-1.05,1.253Z" transform="translate(-13.64 -13.422)" stroke="#000" stroke-width="2" data-astro-cid-v2cbyr3p></path> <path id="Path_53620" data-name="Path 53620" d="M291.883,417.521c-.166.742-.341,1.482-.5,2.227-.329,1.594-.444,4.48-1,4.568a48.558,48.558,0,0,1-8.746.113c-.218-.006-.608-.545-.6-.833q.082-6.207.3-12.41c.005-.161.578-.3,1.7-.846.2,4.016.383,7.651.575,11.486h4.819c1.06-2.654-.844-7.245,3.913-7.142,4.393.1,2.9,4.267,3.585,7.105h5.093c0-2.939-.09-5.85.06-8.749.04-.768.818-1.5,1.257-2.244.447.733,1.244,1.449,1.281,2.2a59.469,59.469,0,0,1-.059,9.195c-.1.923-1.6,1.787-2.594,2.477-.416.288-1.2.049-1.809.051-5.695.013-5.686.013-6.194-5.708a7.683,7.683,0,0,0-.447-1.5Z" transform="translate(-6.357 -9.035)" data-astro-cid-v2cbyr3p></path> <path id="Path_53621" data-name="Path 53621" d="M290.465,395.357c-4.419,3.477-8.71,6.935-13.114,10.243-.794.6-2.052.572-3.1.834.511-.959.8-2.192,1.572-2.832,4.163-3.444,8.378-6.837,12.751-10a3.955,3.955,0,0,1,3.665-.053c4.567,3.318,8.963,6.877,13.338,10.45.619.505.8,1.542,1.189,2.333-.942-.115-2.131.1-2.788-.4C299.478,402.538,295.085,399,290.465,395.357Z" transform="translate(-4.572 -4.502)" data-astro-cid-v2cbyr3p></path> <path id="Path_53622" data-name="Path 53622" d="M305.709,477.983c-9.026,0-18.052.024-27.077-.049-.667-.006-1.327-.717-1.99-1.1.7-.494,1.4-1.409,2.106-1.418,7.951-.1,15.9-.13,23.853.008,1.142.02,2.267,1.023,3.4,1.57Z" transform="translate(-5.2 -26.142)" data-astro-cid-v2cbyr3p></path> <path id="Path_53623" data-name="Path 53623" d="M300.234,437.758c-1.769,2.5-20.16,3.173-23.606,1.1C278.185,437.141,292.168,436.442,300.234,437.758Z" transform="translate(-5.197 -16.072)" data-astro-cid-v2cbyr3p></path> <path id="Path_53624" data-name="Path 53624" d="M297.58,451.388c-.889.443-1.77,1.248-2.669,1.269q-7.874.187-15.753,0c-.844-.021-1.668-.893-2.5-1.371.765-.409,1.526-1.16,2.3-1.172,5.97-.1,11.942-.055,17.914-.055Z" transform="translate(-5.204 -19.488)" data-astro-cid-v2cbyr3p></path> <path id="Path_53625" data-name="Path 53625" d="M298.586,465.3c-6.7,0-13.406.033-20.109-.057-.617-.008-1.225-.806-1.836-1.238.654-.4,1.3-1.133,1.961-1.143,5.99-.091,11.982-.106,17.971.006.816.015,1.617.853,2.425,1.311Z" transform="translate(-5.2 -22.841)" data-astro-cid-v2cbyr3p></path> <path id="Path_53626" data-name="Path 53626" d="M346.444,395.83H335.03V384.238Z" transform="translate(-20.569 -2.164)" fill="#fff" data-astro-cid-v2cbyr3p></path> <path id="Path_53627" data-name="Path 53627" d="M329.278,430.682a16.74,16.74,0,0,1,16.835,17.168,17,17,0,0,1-16.992,16.765,17.238,17.238,0,0,1-16.933-16.924A16.948,16.948,0,0,1,329.278,430.682Zm14.559,17.135a14.5,14.5,0,0,0-14.5-14.875,14.684,14.684,0,1,0,14.5,14.875Z" transform="translate(-14.557 -14.389)" fill="#fff" data-astro-cid-v2cbyr3p></path> <path id="Path_53628" data-name="Path 53628" d="M359.821,482.845l4.312-4c3.731,3.6,7.578,7.079,11.071,10.885.637.693.321,3.383-.442,3.944a4.248,4.248,0,0,1-4.074-.317C367.024,490.168,363.668,486.627,359.821,482.845Z" transform="translate(-27.095 -27.067)" fill="#fff" data-astro-cid-v2cbyr3p></path> <path id="Path_53629" data-name="Path 53629" d="M357.982,477.468l-4.617-4.382,1.05-1.253,4.706,4.271Z" transform="translate(-25.396 -25.221)" fill="#fff" data-astro-cid-v2cbyr3p></path> <path id="Path_53630" data-name="Path 53630" d="M344.655,448.625a14.671,14.671,0,0,1-14.587,14.492,14.684,14.684,0,1,1,.084-29.367A14.5,14.5,0,0,1,344.655,448.625ZM330.2,460.462a12.094,12.094,0,1,0-12.257-12.072A12.22,12.22,0,0,0,330.2,460.462Z" transform="translate(-15.375 -15.197)" data-astro-cid-v2cbyr3p></path> <path id="Path_53631" data-name="Path 53631" d="M331.151,461.364a12.094,12.094,0,0,1-.363-24.185,12.094,12.094,0,1,1,.363,24.185Z" transform="translate(-16.322 -16.099)" fill="#fff" data-astro-cid-v2cbyr3p></path> </g> </svg> <h3 data-astro-cid-v2cbyr3p>Продажа вторичного жилья</h3> <p data-astro-cid-v2cbyr3p>Мы предлагаем разнообразные варианты вторичного жилья в различных районах города. Наши опытные специалисты помогут вам найти подходящий вариант и проведут все необходимые процедуры по оформлению сделки.</p> </li> <li data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 66 66" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-v2cbyr3p><g data-astro-cid-v2cbyr3p><path d="M58.9 65c-.3 0-.5-.1-.7-.3l-4.9-5H29.9c-1.1 0-2.2-.4-3-1.2s-1.2-1.8-1.2-3V37c0-.6.4-1 1-1s1 .4 1 1v18.6c0 .6.2 1.1.6 1.5s.9.6 1.5.6h23.9c.3 0 .5.1.7.3l3.5 3.6v-2.9c0-.5.5-1 1-1h1.9c.6 0 1.1-.2 1.5-.6s.6-1 .6-1.5V35.9c0-1.2-1-2.2-2.2-2.2H32.4c-.6 0-1-.4-1-1s.4-1 1-1h28.5c2.3 0 4.2 1.9 4.2 4.2v19.6c0 1.1-.4 2.2-1.2 3s-1.8 1.2-3 1.2H60l-.1 4.3c0 .4-.3.8-.6.9-.2 0-.3.1-.4.1z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M3.3 38.8c-.3 0-.5-.1-.7-.3s-.3-.6-.3-.9l1.5-7.9C2 26.8 1 23.4 1 19.9 1 9.5 9.5 1 19.9 1s18.9 8.5 18.9 18.9-8.5 18.9-18.9 18.9c-2.6 0-5.2-.5-7.6-1.6l-8.8 1.6h-.2zm9.1-3.7c.1 0 .3 0 .4.1 2.3 1 4.6 1.6 7.1 1.6 9.3 0 16.9-7.6 16.9-16.9S29.2 3 19.9 3 3 10.6 3 19.9c0 3.2.9 6.4 2.7 9.1.1.2.2.5.1.7l-1.3 6.8 7.6-1.4zM13.6 57.7h-.4c-1.3-.2-2.2-1.4-2.2-2.7v-.6c0-2 1.3-3.8 3.1-4.3.9-.2 1.4-1.1 1.2-2-.2-.7-.8-1.2-1.5-1.2-.8 0-1.4.5-1.6.9-.5 1.1-1.8 1.8-3 1.5-.8-.2-1.5-.7-1.8-1.4-.4-.7-.4-1.6 0-2.3.8-1.7 2.3-3 4.1-3.6s3.8-.5 5.6.4c1.4.7 2.5 1.9 3.1 3.4.8 1.9.7 4-.1 5.8-.8 1.6-2 2.8-3.7 3.5V55c0 .8-.3 1.5-.9 2-.7.5-1.3.7-1.9.7zm-.1-2c.3 0 .5-.1.6-.1.2-.1.2-.3.2-.5 0-1 0-1.7.8-1.8 1.4-.4 2.4-1.4 3-2.6.6-1.3.6-2.8.1-4.2-.4-1-1.2-1.9-2.2-2.4-1.3-.7-2.7-.8-4-.3-1.3.4-2.4 1.4-2.9 2.6-.1.2-.1.4 0 .6.1.1.2.3.5.4s.6-.1.8-.4c.6-1.3 2-2.2 3.5-2.1 1.6.1 3 1.2 3.4 2.8.5 2-.7 3.9-2.6 4.4-.9.3-1.6 1.2-1.6 2.4v.6c-.2.2.1.5.4.6zM13.6 65c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1zm0-4.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zM55 23.1c-.6 0-1-.4-1-1v-1.2c0-2 .8-3.8 2.3-5.3 1.4-1.4 2.2-3.2 2.2-5.2s-.8-3.9-2.3-5.3-3.4-2.1-5.4-2c-3.8.2-6.8 3.3-6.9 7-.1 2.1.7 4.1 2.2 5.5s2.3 3.3 2.3 5.3v1.3c0 .6-.4 1-1 1s-1-.4-1-1v-1.3c0-1.4-.6-2.8-1.7-3.8-1.9-1.8-2.9-4.4-2.8-7 .2-4.8 4.1-8.7 8.9-8.9 2.6-.1 5 .8 6.9 2.6s2.9 4.2 2.9 6.7-1 4.9-2.8 6.6c-1.1 1.1-1.7 2.5-1.7 3.9v1.2c-.1.5-.6.9-1.1.9z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M54.8 26.3h-7.2c-1.3 0-2.4-1.1-2.4-2.4v-.5c0-1.3 1.1-2.4 2.4-2.4h7.2c1.3 0 2.4 1.1 2.4 2.4v.5c-.1 1.3-1.1 2.4-2.4 2.4zm-7.2-3.2c-.2 0-.4.2-.4.4v.5c0 .2.2.4.4.4h7.2c.2 0 .4-.2.4-.4v-.5c0-.2-.2-.4-.4-.4z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M51.1 29.6c-2.2 0-4-1.7-4-3.9v-.4c0-.6.4-1 1-1s1 .4 1 1v.4c0 1 .8 1.9 1.9 1.9s2-.8 2-1.9v-.4c0-.6.4-1 1-1s1 .4 1 1v.4c0 2.2-1.8 3.9-3.9 3.9zM51.2 23.1c-.6 0-1-.4-1-1v-6.9c0-.3.1-.5.3-.7l2-2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.7 1.7v6.5c0 .6-.5 1-1 1z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M51.2 16.2c-.3 0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2 2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM19.9 23.2c-2 0-3.6-1.5-3.8-3.4l-.7-8.2c-.1-1.3.3-2.5 1.2-3.5s2.1-1.5 3.4-1.5 2.4.4 3.2 1.4c.9.9 1.3 2.2 1.2 3.5l-.7 8.2c-.2 2-1.8 3.5-3.8 3.5zm0-14.7c-.7 0-1.4.3-1.9.8s-.7 1.2-.7 1.9l.7 8.2c.1.9.9 1.6 1.8 1.6s1.7-.7 1.8-1.6l.7-8.2c.1-.7-.2-1.4-.7-1.9-.3-.5-1-.8-1.7-.8zM19.9 33.3c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zm0-5.4c-.9 0-1.7.8-1.7 1.7s.8 1.7 1.7 1.7 1.7-.8 1.7-1.7-.8-1.7-1.7-1.7zM45.3 38.8H32.2c-.6 0-1-.4-1-1s.4-1 1-1h13.1c.6 0 1 .4 1 1s-.4 1-1 1zM58.4 44.1H32.2c-.6 0-1-.4-1-1s.4-1 1-1h26.2c.6 0 1 .4 1 1s-.4 1-1 1zM58.4 49.4H32.2c-.6 0-1-.4-1-1s.4-1 1-1h26.2c.6 0 1 .4 1 1s-.4 1-1 1zM58.4 54.6H32.2c-.6 0-1-.4-1-1s.4-1 1-1h26.2c.6 0 1 .4 1 1s-.4 1-1 1z" data-astro-cid-v2cbyr3p></path></g></svg> <h3 data-astro-cid-v2cbyr3p>Консультация по недвижимости</h3> <p data-astro-cid-v2cbyr3p>Мы предоставляем профессиональные консультации по всем вопросам, связанным с недвижимостью. Наши эксперты готовы ответить на ваши вопросы и помочь с выбором оптимального варианта жилья.</p> </li> <li data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 256 256" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-v2cbyr3p><g data-astro-cid-v2cbyr3p><path d="M60.731 198.126a40.353 40.353 0 1 1 40.352-40.352 40.4 40.4 0 0 1-40.352 40.352zm0-70.7a30.353 30.353 0 1 0 30.352 30.353 30.386 30.386 0 0 0-30.352-30.358zM109.953 256H11.512a5 5 0 0 1-5-5v-10.113c0-21.5 16.9-36.519 41.108-36.519h26.225c24.2 0 41.108 15.017 41.108 36.519V251a5 5 0 0 1-5 5zm-93.441-10h88.441v-5.113c0-18.319-15.624-26.519-31.108-26.519H47.62c-15.484 0-31.108 8.2-31.108 26.519z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M128 256a5 5 0 0 1 0-10A118 118 0 1 0 10 128a5 5 0 0 1-10 0 128 128 0 1 1 128 128z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M157.491 150.031a4.985 4.985 0 0 1-2.5-.671l-29.5-17.03A5 5 0 0 1 123 128V57.611a5 5 0 1 1 10 0v67.5l27 15.589a5 5 0 0 1-2.5 9.331z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-v2cbyr3p></path><path d="M128 232.335a5 5 0 0 1 0-10 94.369 94.369 0 1 0-93.212-108.944 5 5 0 1 1-9.881-1.536A104.342 104.342 0 1 1 128 232.335z" data-astro-cid-v2cbyr3p></path></g></svg> <h3 data-astro-cid-v2cbyr3p>Поддержка сделок</h3> <p data-astro-cid-v2cbyr3p>Мы оказываем полную поддержку на всех этапах сделки – от подбора объекта до заключения договора. Мы гарантируем надежность и безопасность всех сделок, а также стремимся к максимальному удовлетворению потребностей наших клиентов.</p> </li> </ul> <p data-astro-cid-v2cbyr3p>Мы – надежный партнер для всех, кто заинтересован в недвижимости в Челябинске. Наш профессионализм, опыт и индивидуальный подход к каждому клиенту помогли нам заслужить доверие на рынке недвижимости региона.</p> </div> </section> `;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/About.astro", void 0);

const $$Astro$4 = createAstro("https://monolid74.com/");
const $$NewBuildings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NewBuildings;
  const posts = await getCollection("newBuildings");
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="newBuildings__title" data-astro-cid-jog7lwvv> <div class="container" data-astro-cid-jog7lwvv> <h2 id="newBuildings__title" data-astro-cid-jog7lwvv>Новые новостройки Челябинска</h2> <ul class="newBuildings__ul" data-astro-cid-jog7lwvv> ${posts.map((post) => renderTemplate`<li itemscope itemtype="https://schema.org/Accommodation" data-astro-cid-jog7lwvv> <meta itemprop="yearBuilt"${addAttribute(post.data.year, "content")}> <div itemscope itemtype="https://schema.org/ApartmentComplex"${addAttribute(post.data.title, "aria-label")} data-astro-cid-jog7lwvv> <article data-astro-cid-jog7lwvv> ${renderComponent($$result, "Image", $$Image, { "itemprop": "image", "src": post.data.image, "alt": post.data.title, "data-astro-cid-jog7lwvv": true })} <div class="text__box" data-astro-cid-jog7lwvv> <h3 itemprop="name" data-astro-cid-jog7lwvv>${post.data.title}</h3> <div class="newBuildings__wrapper" data-astro-cid-jog7lwvv> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jog7lwvv> <path d="M7.70538 0C4.67267 0 2.20538 2.59944 2.20538 5.79456C2.20538 9.75981 7.12734 15.581 7.3369 15.8269C7.53373 16.0579 7.87739 16.0575 8.07387 15.8269C8.28342 15.581 13.2054 9.75981 13.2054 5.79456C13.2053 2.59944 10.7381 0 7.70538 0ZM7.70538 8.70997C6.17955 8.70997 4.93822 7.40212 4.93822 5.79456C4.93822 4.187 6.17958 2.87919 7.70538 2.87919C9.23119 2.87919 10.4725 4.18703 10.4725 5.79459C10.4725 7.40216 9.23119 8.70997 7.70538 8.70997Z" fill="#1C244B" data-astro-cid-jog7lwvv></path> </svg> <p data-astro-cid-jog7lwvv>${post.data.location}</p> <div class="visually-hidden" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" data-astro-cid-jog7lwvv> <meta itemprop="addressLocality" content="Челябинск"> <meta itemprop="addressRegion" content="Челябинская область"> <meta itemprop="telephone" content="89642409046"> </div> </div> <div class="newBuildings__wrapper" data-astro-cid-jog7lwvv> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jog7lwvv> <path d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z" fill="#1C244B" data-astro-cid-jog7lwvv></path> <path d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z" fill="#1C244B" data-astro-cid-jog7lwvv></path> </svg> <p data-astro-cid-jog7lwvv>${post.data.year}</p> </div> <div class="newBuildings__wrapper" data-astro-cid-jog7lwvv> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jog7lwvv> <path d="M13.6 14.4V0H2.4V14.4H0.799988V16H15.2V14.4H13.6ZM7.2 1.60001H8.80001V3.20002H7.2V1.60001ZM7.2 4.8H8.80001V6.40001H7.2V4.8ZM7.2 7.99998H8.80001V9.59999H7.2V7.99998ZM5.59998 9.59999H3.99997V7.99998H5.59998V9.59999ZM5.59998 6.40001H3.99997V4.8H5.59998V6.40001ZM5.59998 3.19999H3.99997V1.60001H5.59998V3.19999ZM9.59999 14.4H6.40001V12.8C6.40001 11.92 7.12001 11.2 8.00002 11.2C8.88003 11.2 9.59999 11.92 9.59999 12.8V14.4ZM12 9.59999H10.4V7.99998H12V9.59999ZM12 6.40001H10.4V4.8H12V6.40001ZM12 3.19999H10.4V1.60001H12V3.19999Z" fill="#1C244B" data-astro-cid-jog7lwvv></path> </svg> <p data-astro-cid-jog7lwvv>${post.data.buildingType}</p> </div> <a itemprop="url"${addAttribute(post.data.urlPath + "/", "href")} data-astro-cid-jog7lwvv>Подробнее</a> </div> </article> </div> </li>`)} </ul> </div> </section> `;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/NewBuildings.astro", void 0);

const sber = new Proxy({"src":"/_astro/sber.CP7Lak7n.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Acer/Desktop/сайт/monolid/jk/src/assets/sber.png";
							}
							
							return target[name];
						}
					});

const alfa = new Proxy({"src":"/_astro/alfabank.-oiT2Ir5.jpg","width":257,"height":90,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Acer/Desktop/сайт/monolid/jk/src/assets/alfabank.jpg";
							}
							
							return target[name];
						}
					});

const vtbbank = new Proxy({"src":"/_astro/vtb.WM4oB8k0.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Acer/Desktop/сайт/monolid/jk/src/assets/vtb.png";
							}
							
							return target[name];
						}
					});

const promsvyaz = new Proxy({"src":"/_astro/promsvyaz.BvhCie9t.jpg","width":229,"height":90,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Acer/Desktop/сайт/monolid/jk/src/assets/promsvyaz.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://monolid74.com/");
const $$OurPartners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$OurPartners;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="ourPartners__title" data-astro-cid-sxrt5opk> <div class="container" data-astro-cid-sxrt5opk> <h2 id="ourPartners__title" data-astro-cid-sxrt5opk>Наши партнёры по ипотеке</h2> <ul data-astro-cid-sxrt5opk> <li data-astro-cid-sxrt5opk> ${renderComponent($$result, "Image", $$Image, { "src": sber, "alt": "\u0441\u0431\u0435\u0440\u0431\u0430\u043D\u043A", "data-astro-cid-sxrt5opk": true })} </li> <li data-astro-cid-sxrt5opk> ${renderComponent($$result, "Image", $$Image, { "src": alfa, "alt": "\u0410\u043B\u044C\u0444\u0430\u0431\u0430\u043D\u043A", "data-astro-cid-sxrt5opk": true })} </li> <li data-astro-cid-sxrt5opk> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250px" height="100px" viewBox="0 0 250 100" data-astro-cid-sxrt5opk> <title>Group 15</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-astro-cid-sxrt5opk> <g id="Artboard" transform="translate(-402.000000, -470.000000)" data-astro-cid-sxrt5opk> <g id="Group-15" transform="translate(402.000000, 470.000000)" data-astro-cid-sxrt5opk> <rect id="Rectangle-Copy-2" x="0" y="0" width="250" height="100" data-astro-cid-sxrt5opk></rect> <g id="uralsib_2022_color_logo" transform="translate(17.000000, 25.000000)" fill="#3B175C" fill-rule="nonzero" data-astro-cid-sxrt5opk> <path d="M88.6887931,29.9278689 C87.587069,29.9278689 86.6689655,29.5606557 85.7508621,29.0098361 C84.8327586,28.4590164 84.2818966,27.5409836 83.7310345,26.6229508 C83.3637931,25.704918 83.1801724,24.6032787 83.3637931,23.6852459 C83.5474138,22.5836066 84.0982759,21.6655738 84.8327586,20.9311475 C85.5672414,20.1967213 86.4853448,19.6459016 87.587069,19.4622951 C88.6887931,19.2786885 89.6068966,19.2786885 90.525,19.8295082 C91.4431034,20.1967213 92.3612069,20.9311475 92.912069,21.6655738 C93.462931,22.5836066 93.8301724,23.5016393 93.8301724,24.6032787 C93.8301724,25.3377049 93.6465517,25.8885246 93.462931,26.6229508 C93.2793103,27.1737705 92.912069,27.9081967 92.3612069,28.2754098 C91.8103448,28.8262295 91.2594828,29.1934426 90.7086207,29.3770492 C89.9741379,29.9278689 89.2396552,29.9278689 88.6887931,29.9278689 M89.6068966,14.6885246 C86.8525862,14.6885246 84.6491379,15.7901639 83.7310345,17.6262295 L83.5474138,17.6262295 L83.5474138,15.2393443 L78.4060345,15.2393443 L78.4060345,39.6590164 L83.5474138,39.6590164 L83.5474138,31.947541 L83.7310345,31.947541 C84.8327586,33.7836066 86.8525862,34.8852459 89.6068966,34.8852459 C94.9318966,34.8852459 98.9715517,30.4786885 98.9715517,24.7868852 C98.9715517,19.095082 94.9318966,14.6885246 89.6068966,14.6885246 M202.900862,29.9278689 C201.982759,29.9278689 201.064655,29.5606557 200.146552,29.0098361 C199.412069,28.4590164 198.677586,27.7245902 198.493966,26.8065574 C198.126724,25.8885246 198.126724,24.9704918 198.310345,24.052459 C198.493966,23.1344262 199.044828,22.2163934 199.59569,21.6655738 C200.330172,20.9311475 201.248276,20.5639344 202.166379,20.3803279 C203.084483,20.1967213 204.002586,20.3803279 204.92069,20.747541 C205.838793,21.1147541 206.573276,21.6655738 207.124138,22.5836066 C207.675,23.3180328 207.858621,24.2360656 207.858621,25.3377049 C207.858621,26.0721311 207.675,26.6229508 207.491379,27.1737705 C207.307759,27.7245902 206.940517,28.2754098 206.389655,28.8262295 C205.838793,29.1934426 205.287931,29.5606557 204.737069,29.9278689 C204.186207,29.9278689 203.451724,29.9278689 202.900862,29.9278689 Z M204.002586,16.157377 C202.717241,16.157377 201.431897,16.3409836 200.330172,16.8918033 C199.228448,17.442623 198.126724,18.3606557 197.392241,19.2786885 L197.208621,19.2786885 C197.575862,15.6065574 199.59569,13.9540984 203.818966,13.2196721 L211.163793,12.1180328 L211.163793,7.3442623 L203.268103,8.44590164 C195.923276,9.54754098 192.434483,13.5868852 192.434483,20.747541 C192.434483,26.0721311 192.801724,27.7245902 193.719828,29.5606557 C195.188793,32.6819672 198.677586,34.7016393 202.900862,34.7016393 C208.593103,34.7016393 213,30.4786885 213,24.9704918 C213,19.8295082 209.327586,16.157377 204.002586,16.157377 M73.0810345,9.54754098 L67.3887931,21.6655738 L59.4931034,9.54754098 L53.25,9.54754098 L64.6344828,26.9901639 L64.2672414,27.7245902 C64.0836207,28.2754098 63.7163793,28.642623 63.1655172,29.0098361 C62.6146552,29.3770492 62.0637931,29.3770492 61.512931,29.3770492 L57.4732759,29.3770492 L57.4732759,34.5180328 L62.0637931,34.5180328 C65.5525862,34.5180328 67.0215517,33.6 68.4905172,30.4786885 L78.5896552,9.73114754 L73.0810345,9.54754098 Z M128.534483,15.2393443 L127.616379,26.9901639 C127.432759,28.8262295 126.881897,29.5606557 125.412931,29.5606557 L124.127586,29.5606557 L124.127586,34.3344262 L127.249138,34.3344262 C130.737931,34.3344262 132.206897,32.6819672 132.390517,29.3770492 L133.125,20.1967213 L139.551724,20.1967213 L139.551724,34.3344262 L144.693103,34.3344262 L144.693103,15.2393443 L128.534483,15.2393443 Z M158.097414,19.6459016 C159.015517,19.6459016 159.933621,19.8295082 160.851724,20.3803279 C161.586207,20.9311475 162.32069,21.6655738 162.687931,22.4 L167.278448,20.5639344 C165.993103,16.8918033 162.32069,14.6885246 158.097414,14.6885246 C156.812069,14.6885246 155.526724,14.8721311 154.241379,15.4229508 C152.956034,15.9737705 151.85431,16.7081967 150.936207,17.6262295 C150.018103,18.5442623 149.283621,19.6459016 148.732759,20.9311475 C148.181897,22.2163934 147.998276,23.5016393 147.998276,24.7868852 C147.998276,26.0721311 148.181897,27.5409836 148.732759,28.642623 C149.283621,29.9278689 150.018103,31.0295082 150.936207,31.947541 C151.85431,32.8655738 152.956034,33.6 154.241379,34.1508197 C155.526724,34.7016393 156.812069,34.8852459 158.097414,34.8852459 C162.50431,34.8852459 165.993103,32.4983607 167.278448,29.0098361 L162.687931,27.1737705 C162.32069,28.0918033 161.586207,28.8262295 160.851724,29.1934426 C160.117241,29.7442623 159.199138,29.9278689 158.097414,29.9278689 C157.362931,29.9278689 156.812069,29.7442623 156.077586,29.5606557 C155.526724,29.3770492 154.792241,29.0098361 154.425,28.4590164 C154.057759,27.9081967 153.506897,27.357377 153.323276,26.8065574 C153.139655,26.2557377 152.956034,25.5213115 152.956034,24.7868852 C152.956034,24.052459 152.956034,23.5016393 153.323276,22.7672131 C153.506897,22.2163934 153.874138,21.4819672 154.425,21.1147541 C154.975862,20.5639344 155.526724,20.1967213 156.077586,20.0131148 C156.628448,19.6459016 157.362931,19.6459016 158.097414,19.6459016 M183.253448,15.2393443 L175.357759,27.357377 L175.357759,15.2393443 L170.216379,15.2393443 L170.216379,34.3344262 L175.908621,34.3344262 L183.80431,22.4 L183.80431,34.3344262 L188.94569,34.3344262 L188.94569,15.2393443 L183.253448,15.2393443 Z M111.457759,29.9278689 C110.356034,29.9278689 109.437931,29.7442623 108.519828,29.1934426 C107.601724,28.642623 106.867241,27.9081967 106.5,26.8065574 C106.132759,25.8885246 105.949138,24.7868852 106.132759,23.8688525 C106.316379,22.7672131 106.867241,21.8491803 107.601724,21.1147541 C108.336207,20.3803279 109.25431,19.8295082 110.356034,19.6459016 C111.457759,19.4622951 112.375862,19.4622951 113.477586,19.8295082 C114.39569,20.1967213 115.313793,20.9311475 115.864655,21.6655738 C116.415517,22.5836066 116.782759,23.5016393 116.782759,24.6032787 C116.782759,25.3377049 116.599138,25.8885246 116.415517,26.6229508 C116.231897,27.1737705 115.864655,27.9081967 115.313793,28.2754098 C114.762931,28.8262295 114.212069,29.1934426 113.661207,29.3770492 C112.926724,29.9278689 112.192241,29.9278689 111.457759,29.9278689 M116.599138,17.6262295 L116.415517,17.6262295 C115.313793,15.7901639 113.293966,14.6885246 110.539655,14.6885246 C105.214655,14.6885246 101.175,19.095082 101.175,24.7868852 C101.175,30.4786885 105.398276,34.8852459 110.539655,34.8852459 C113.293966,34.8852459 115.497414,33.7836066 116.415517,31.947541 L116.599138,31.947541 L116.599138,34.3344262 L121.740517,34.3344262 L121.740517,15.2393443 L116.599138,15.2393443 L116.599138,17.6262295 Z M38.9275862,22.4 C38.9275862,19.095082 38.0094828,15.9737705 36.5405172,13.0360656 C34.887931,10.0983607 32.6844828,7.71147541 29.9301724,6.05901639 L29.9301724,10.6491803 C32.3172414,12.852459 34.1534483,15.6065574 34.887931,18.9114754 C35.6224138,22.0327869 35.2551724,25.3377049 34.1534483,28.4590164 C31.7663793,26.2557377 30.1137931,23.3180328 29.1956897,20.1967213 C27.9103448,16.3409836 27.7267241,12.1180328 27.5431034,6.97704918 L27.5431034,4.77377049 C26.4413793,4.22295082 25.3396552,3.8557377 24.0543103,3.67213115 L24.0543103,7.16065574 C24.237931,25.1540984 27.1758621,32.4983607 31.5827586,38.0065574 C33.9698276,36.1704918 35.8060345,33.7836066 37.0913793,31.2131148 C38.1931034,28.2754098 38.9275862,25.3377049 38.9275862,22.4 L38.9275862,22.4 M15.0568966,6.97704918 L15.0568966,3.48852459 C13.7715517,3.8557377 12.6698276,4.22295082 11.5681034,4.59016393 L11.5681034,6.79344262 C11.5681034,11.9344262 11.2008621,16.157377 9.91551724,20.0131148 C8.99741379,23.1344262 7.1612069,25.8885246 4.95775862,28.2754098 C3.67241379,25.3377049 3.4887931,21.8491803 4.22327586,18.7278689 C4.77413793,15.7901639 6.61034483,12.852459 8.99741379,10.6491803 L8.99741379,6.05901639 C6.24310345,7.89508197 4.03965517,10.2819672 2.38706897,13.0360656 C0.734482759,15.7901639 0,19.2786885 0,22.4 L0,22.4 C0,25.3377049 0.734482759,28.2754098 2.01982759,30.8459016 C3.30517241,33.4163934 5.14137931,35.8032787 7.52844828,37.6393443 L7.52844828,37.6393443 C11.9353448,32.3147541 14.8732759,24.7868852 15.0568966,6.97704918 M21.1163793,0 C20.5655172,0 19.8310345,0 19.4637931,0 C19.0965517,0 18.362069,0 17.6275862,0 L17.6275862,4.03934426 C17.6275862,21.6655738 16.8931034,29.3770492 14.5060345,41.3114754 C17.8112069,42.2295082 21.1163793,42.2295082 24.4215517,41.3114754 C21.8508621,29.5606557 21.3,21.8491803 21.3,4.03934426 L21.1163793,0 Z" id="Shape" data-astro-cid-sxrt5opk></path> </g> </g> </g> </g> </svg> </li> <li data-astro-cid-sxrt5opk> ${renderComponent($$result, "Image", $$Image, { "src": vtbbank, "alt": "\u0412\u0442\u0431 \u0431\u0430\u043D\u043A", "data-astro-cid-sxrt5opk": true })} </li> <li data-astro-cid-sxrt5opk> ${renderComponent($$result, "Image", $$Image, { "src": promsvyaz, "alt": "\u041F\u0440\u043E\u043C\u0441\u0432\u044F\u0437\u044C\u0431\u0430\u043D\u043A", "data-astro-cid-sxrt5opk": true })} </li> </ul> <div class="form__wrapper" data-astro-cid-sxrt5opk> <h3 data-astro-cid-sxrt5opk>Подобрать недвижимость</h3> <form class="partners__form" data-astro-cid-sxrt5opk> <div class="input__wrapper" data-astro-cid-sxrt5opk> <label for="" data-astro-cid-sxrt5opk> <input id="partnersFormName" type="text" placeholder="Введите ваше имя" name="name" required data-astro-cid-sxrt5opk> </label> <label for="" data-astro-cid-sxrt5opk> <input id="partnersFormPhone" class="phoneMask" type="tel" placeholder="Ваш номер телефона" name="phone" required data-astro-cid-sxrt5opk> </label> </div> <button data-astro-cid-sxrt5opk>Записаться на консультацию</button> <a class="policy" href="" data-astro-cid-sxrt5opk>Нажимая на кнопку, вы даете согласие на обработку персональных данных</a> </form> <div class="form-sent-message partnersMessage" data-astro-cid-sxrt5opk> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-sxrt5opk><g data-astro-cid-sxrt5opk><switch data-astro-cid-sxrt5opk><g data-astro-cid-sxrt5opk><g fill="#02bc7d" data-astro-cid-sxrt5opk><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-sxrt5opk></path><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-sxrt5opk></path></g></g></switch></g></svg> <p data-astro-cid-sxrt5opk>Форма успешно отправлена</p> </div> </div> </div> </section>  `;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/OurPartners.astro", void 0);

const $$Astro$2 = createAstro("https://monolid74.com/");
const $$Maps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Maps;
  return renderTemplate`${maybeRenderHead()}<div class="maps__section" data-astro-cid-p6dpuiji> <h2 data-astro-cid-p6dpuiji>Расположение нашего офиса</h2> <div class="maps__wrapper" data-astro-cid-p6dpuiji> <a href="https://yandex.ru/maps/?um=constructor%3A594de6463742a647c998d7dcfe2db792e09cfa7efd769402a53cf6421dd0079f&source=constructorStatic" target="_blank" data-astro-cid-p6dpuiji><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A594de6463742a647c998d7dcfe2db792e09cfa7efd769402a53cf6421dd0079f&width=600&height=450&lang=ru_RU" alt="" style="border: 0;" data-astro-cid-p6dpuiji></a> </div> </div> `;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/Maps.astro", void 0);

const cardFormImg = new Proxy({"src":"/_astro/cardForm.C_WlqABT.jpg","width":743,"height":673,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Acer/Desktop/сайт/monolid/jk/src/assets/cardForm.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://monolid74.com/");
const $$CardForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardForm;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="consultancy__title" data-astro-cid-g4poiezc> <div class="container" data-astro-cid-g4poiezc> <div class="cardform__wrapper" data-astro-cid-g4poiezc> ${renderComponent($$result, "Image", $$Image, { "src": cardFormImg, "alt": "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0437\u0434\u0430\u043D\u0438\u044F", "data-astro-cid-g4poiezc": true })} <div class="cardform-right" data-astro-cid-g4poiezc> <h2 id="consultancy__title" data-astro-cid-g4poiezc>Запишитесь на бесплатную консультацию</h2> <p data-astro-cid-g4poiezc>Мы подробно расскажем обо всех проектах строящихся и готовых жилых комплексов.</p> <form class="consultancyForm" data-astro-cid-g4poiezc> <div class="input__wrapper" data-astro-cid-g4poiezc> <label class="visually-hidden" for="" data-astro-cid-g4poiezc>Ваше имя</label> <input required id="consultancyName" placeholder="Ваше имя" type="text" name="name" data-astro-cid-g4poiezc> <label class="visually-hidden" for="" data-astro-cid-g4poiezc>Телефон</label> <input required id="consultancyPhone" class="phoneMask" placeholder="Телефон" type="tel" name="phone" data-astro-cid-g4poiezc> </div> <button type="submit" data-astro-cid-g4poiezc>Записаться</button> <span data-astro-cid-g4poiezc>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</span> </form> <div class="form-sent-message playboiCartiMessage" data-astro-cid-g4poiezc> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-g4poiezc><g data-astro-cid-g4poiezc><switch data-astro-cid-g4poiezc><g data-astro-cid-g4poiezc><g fill="#02bc7d" data-astro-cid-g4poiezc><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-g4poiezc></path><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-g4poiezc></path></g></g></switch></g></svg> <p data-astro-cid-g4poiezc>Форма успешно отправлена</p> </div> </div> </div> </div> </section>  `;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/components/CardForm.astro", void 0);

const $$Astro = createAstro("https://monolid74.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="ru" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> <div class="wrapper" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <div class="visually-hidden" data-astro-cid-j7pv25f6>${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "indexText": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", "data-astro-cid-j7pv25f6": true })}</div> <main data-astro-cid-j7pv25f6> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "CardForm", $$CardForm, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "NewBuildings", $$NewBuildings, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "OurPartners", $$OurPartners, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Maps", $$Maps, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </div>  </body></html>`;
}, "C:/Users/Acer/Desktop/\u0441\u0430\u0439\u0442/monolid/jk/src/pages/index.astro", void 0);

const $$file = "C:/Users/Acer/Desktop/сайт/monolid/jk/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getSanity as a, index$1 as b, index as c, getCollection as g, index$2 as i, urlForImage as u };
