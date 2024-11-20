import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FaBuilding, FaHome, FaQuestion, FaHandsHelping  } from "react-icons/fa";
import { BsFillHousesFill } from "react-icons/bs";
import { IoLink } from "react-icons/io5";
import { FaNewspaper, FaMapLocationDot } from "react-icons/fa6";
import { CgArrowTopRightR } from "react-icons/cg";

export const desckStructure = (S, context) => 
    S.list()
        .title('Управление контентом MonoliD')
        .items([
            S.listItem()
                .title('Шапка сайта')
                .child(S.editor().schemaType('headerlinks').documentId('headerlinks').title('Шапка сайта'))
                .icon(IoLink),

                S.divider(),

            S.listItem()
                .title('Страницы сайта')
                .child(
                    S.list()
                        .title('Страницы сайта')
                        .items([
                            S.listItem()
                                .title('Главная страница')
                                .icon(FaHome)
                                .child(S.editor().schemaType('mainPage').documentId('mainPage').title('Главная страница')),
                                S.divider(),
                            orderableDocumentListDeskItem({
                                title: 'Жилые комплексы',
                                type: 'zhks',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            S.divider(),

                            S.listItem()
                                .title('Наши услуги')
                                .icon(FaHandsHelping)
                                .child(S.editor().schemaType('nashiUslugi').documentId('nashiUslugi').title('Наши услуги')),

                            S.listItem()
                                .title('Ответы на вопросы')
                                .icon(FaQuestion)
                                .child(S.editor().schemaType('faq').documentId('faq').title('Ответы на вопросы')),

                            S.listItem()
                                .title('Контакты')
                                .icon(FaMapLocationDot)
                                .child(S.editor().schemaType('contacts').documentId('contacts').title('Контакты')),
                            S.divider(),
                        ])
                ),

            S.listItem()
                .title('Вторичка')
                .icon(BsFillHousesFill)
                .child(
                    S.list()
                        .title('Вторичка')
                        .items([
                            orderableDocumentListDeskItem({
                                title: 'Вторичка',
                                type: 'vtorichka',
                                icon: BsFillHousesFill,
                                S,
                                context,
                            }),
                        ])
                ),


            S.listItem()
                .title('Новости')
                .icon(FaNewspaper)
                .child(S.documentTypeList('blog').title('Новости')),

                S.divider(),

                S.listItem()
                .title('Подвал')
                .child(S.editor().schemaType('footerlinks').documentId('footerlinks').title('Подвал'))
                .icon(CgArrowTopRightR),
        ])
