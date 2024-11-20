import { vtorichka } from "./objects/vtorichka/vtorichka";
import normalText from "./objects/normalText";
import { blog } from "./objects/blog/blog";
import { zhks } from "./objects/pages/zhks";
import { seo } from "./objects/seo";
import { mainPage } from "./objects/pages/mainPage";
import { headerlinks } from "./objects/headerlinks";
import { footerlinks } from "./objects/footerlinks";
import { faq } from "./objects/pages/faq";
import { nashiUslugi } from "./objects/pages/nashi-uslugi";
import { contacts } from "./objects/pages/contacts";


export const schemaTypes = [headerlinks, footerlinks, seo, mainPage, faq, nashiUslugi, contacts, normalText, vtorichka, zhks, blog]
