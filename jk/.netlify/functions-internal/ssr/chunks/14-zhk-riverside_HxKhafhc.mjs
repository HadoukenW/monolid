import { _ as __astro_tag_component__, l as Fragment, w as createVNode } from './astro_7hprNihR.mjs';
import { c as $$Image } from './pages/404_xkaqlRBh.mjs';
import 'clsx';

const frontmatter = {
  "title": "14 \u0434\u043E\u043C \u0416\u041A \u0410\u043A\u0430\u0434\u0435\u043C \u0420\u0438\u0432\u0435\u0440\u0441\u0430\u0439\u0434",
  "titleForLayots": "14 \u0434\u043E\u043C\u0435 \u0416\u041A \u0410\u043A\u0430\u0434\u0430\u043C \u0420\u0438\u0432\u0435\u0440\u0441\u0430\u0439\u0434",
  "description": "Lorem ipsum dolor sit amet",
  "year": "2027",
  "heroImage": "/public/18 \u0434\u043E\u043C/MBxOAVByGW8.webp",
  "location": "\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0441\u043A\u0438\u0439",
  "buildingType": "\u041C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u044B\u0439",
  "layoutsSectionData": [{
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-1.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-2.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-3.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-4.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-5.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-6.webp"
  }, {
    "title": "\u0441\u0442+1",
    "image": "/14 \u0434\u043E\u043C/layouts-7.webp"
  }],
  "mapLocation": "https://yandex.ru/map-widget/v1/?um=constructor%3A3953929afd9e2b0114da7990f09e28e7b8e5a1a716eff11576a6398daea1d489&amp;source=constructor"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/catalog/14-zhk-riverside.mdx";
const file = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/catalog/14-zhk-riverside.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/hadou/OneDrive/Рабочий стол/monolid/monolid/jk/src/content/catalog/14-zhk-riverside.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
