import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FaBuilding, FaHome  } from "react-icons/fa";

export const desckStructure = (S, context) => 
    S.list()
        .title('Управление контентом MonoliD')
        .items([

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
                            orderableDocumentListDeskItem({
                                title: 'Жилые комплексы',
                                type: 'zhks',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                        ])
                ),

            S.listItem()
                .title('Вторичка')
                .child(
                    S.list()
                        .title('Вторичка')
                        .items([
                            orderableDocumentListDeskItem({
                                title: 'Вторичка',
                                type: 'vtorichka',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                        ])
                ),

             S.divider(),

            S.listItem()
                .title('Блог')
                .child(S.documentTypeList('blog').title('Блог')),
        ])
