import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FaBuilding } from "react-icons/fa";

export const desckStructure = (S, context) => 
    S.list()
        .title('Управление контентом MonoliD')
        .items([
            S.listItem()
                .title('Планировки')
                .child(
                    S.list()
                        .title('Планировки')
                        .items([
                            orderableDocumentListDeskItem({
                                title: 'ЖК Братьев Кашириных 102 / 98 А',
                                type:'zhk-bratiev-kashirinyh',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: '81.1 дом ЖК Академ Риверсайд',
                                type: '81-1-zhk-riverside',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: '81.2 дом ЖК Академ Риверсайд',
                                type: '81-2-zhk-riverside',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'Жилой Комплекс Спортивный',
                                type: 'zhk-sportivniy',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Видный',
                                type: 'zhk-vidniy',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: '18 ЖК Академ Риверсайд',
                                type: '18-zhk-riverside',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: '14 ЖК Академ Риверсайд',
                                type: '14-zhk-riverside',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Клевер',
                                type: 'zhk-klever',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК 4 Ленина',
                                type: 'zhk-4-lenina',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Голос Кашириных',
                                type: 'zhk-golos-kashirinyx',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Конфетти',
                                type: 'zhk-konfetti',
                                icon: FaBuilding,
                                S,
                                context,
                                }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Никс Лайн',
                                type: 'zhk-niks-line',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Никс Сити',
                                type: 'zhk-niks-city',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Новиль',
                                type: 'zhk-novil',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Парковый Премиум',
                                type: 'zhk-parkoviy-premium',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Притяжение',
                                type: 'zhk-prityazhenie',
                                icon: FaBuilding,
                                S,
                                context,
                            }),
                            orderableDocumentListDeskItem({
                                title: 'ЖК Хюгге',
                                type: 'zhk-hugee-itown',
                                icon: FaBuilding,
                                S,
                                context,
                            }),

                            ])
                ),
            
        ])