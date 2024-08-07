import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'


export const zhks = defineType({
    name: 'zhks',
    title: 'Жилые комплексы',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'zhks'}),
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            options: {
                collapsible: true,
            }
        
        },
        {
            name: 'title',
            title: 'Название ЖК',
            type: 'string'
        },
        {
            name: 'isInProgress',
            title: 'В процессе строительства?',
            type: 'boolean'
        },
        {
            name: 'pageSlug',
            title: 'Ссылка на страницу',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            }
        },
        {
            name: 'iszhk',
            title: 'Это не жилой комплекс?',
            description: '(Дом, Земля, Коттедж, Посёлок)',
            type: 'boolean'
        },
        {
            name: 'city',
            title: 'Город',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Район',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Год строительства',
            type: 'string'
        },
        {
            name: 'buildingType',
            title: 'Тип строения',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'Баннер-фото',
            type: 'image'
        },
        {
            name: 'aboutSectionData',
            title: 'О Жилом комплексе',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                    {
                        name: 'title',
                        title: 'Заголовок',
                        type: 'string'
                    },
                    {
                        name: 'text',
                        title: 'Описание',
                        type: 'text'
                    },
                    {
                        hidden: ({ parent }) => parent.isVideo,
                        name: 'image',
                        title: 'Изображение',
                        type: 'image'
                    },
                    {
                        name: 'isVideo',
                        title: 'Это видео?',
                        type: 'boolean'

                    },
                    {
                        hidden: ({ parent }) => !parent.isVideo,
                        name: 'video',
                        title: 'Ссылка на видео',
                        type: 'string'
                    }
                ]
                }
            ],
        },
        {
            name: 'layouts',
            title: 'Планировки',
            type: 'array',
            hidden: ({document}) => document?.iszhk,
            of: [
                {
                    name: 'layout',
                    type: 'object',
                    title: 'Планировка',
                    
                    fields: [
                    {
                        name: 'photo',
                        title: 'Фото планировки',
                        type: 'image'
                    },
                    {
                        name: 'rooms',
                        title: 'Количество комнат',
                        type: 'string',
                        options: {
                            list: [
                                {title: 'студия', value: 'студия'},
                                {title: '1-комнатная', value: '1-комнатная'},
                                {title: '2-комнатная', value: '2-комнатная'},
                                {title: '3-комнатная', value: '3-комнатная'},
                                {title: '4-комнатная', value: '4-комнатная'},
                            ]
                        }
                    },
                    {
                        name: 'price',
                        title: 'Цена',
                        type: 'string',
                    },
                    {
                        name: 'isAvailable',
                        title: 'В наличии?',
                        type: 'boolean',
                        options: {
                            layout: 'checkbox'
                        },
                        initialValue: true
                    }
                ],
                preview: {
                    select: {
                        title: 'rooms',
                        subtitle: 'price',
                        media: 'photo'
                    },
                }
                }
            ]
        },
        {   
            name: 'notZhkLayouts',
            title: 'Планировки',
            type: 'array',
            hidden: ({document}) => !document?.iszhk,
            
            of: [
                {
                    name: 'notZhkLayout',
                    title: 'Планировка',
                    type: 'object',

                    fields: [
                        {
                            name: 'title',
                            title: 'Название объекта',
                            type: 'string'
                        },
                        {
                            name: 'photos',
                            title: 'Фото планировки',
                            type: 'array',
                            of: [{type: 'image'}]
                        },
                        {
                            name: 'properties',
                            title: 'Характеристики',
                            type: 'object',
                            fields: [
                                {
                                    name: 'ploshaduchastkadomovladenia',
                                    title: 'Площадь участка домовладения',
                                    type: 'string'
                                },
                                {
                                    name: 'ploshaduchastka',
                                    title: 'Общая площадь',
                                    type: 'string'
                                },
                                {
                                    name: 'ploshadparkovkinadnavesom',
                                    title: 'Площадь парковки над навесом (Если есть)',
                                    type: 'string'
                                },
                                {
                                    name: 'visotaPotolkov',
                                    title: 'Высота потолков',
                                    type: 'string'
                                },
                                {
                                    name: 'ploshadTerrasy',
                                    title: 'Площадь террасы',
                                    type: 'string'
                                },
                                {
                                    name: 'kitchenStolovayaGostinaya',
                                    title: 'Кухня-столовая-гостиная',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            name: 'price',
                            title: 'Цена',
                            description: '(Если есть)',
                            type: 'string'
                        },
                        {
                            name: 'isAvailable',
                            title: 'В наличии?',
                            type: 'boolean',
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: true
                        }
                    ]

                },
            ],
            preview: {
                select: {
                    title: 'title',
                    media: 'photos'
                }
            }
        },
        {
            name: 'isTherePreGallerySection',
            title: 'Есть блок с предварительной галереей?',
            type: 'boolean'
        },
        {
            hidden: ({document}) => !document?.isTherePreGallerySection,
            name: 'preGallerySectionData',
            title: 'Блок с предварительной галереей',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                    {
                        name: 'title',
                        title: 'Заголовок',
                        type: 'string'
                    },
                    {
                        name: 'image',
                        title: 'Изображения',
                        type: 'array',
                        of: [
                            {
                                type: 'image'
                            }
                        ]
                    }
                ]
                }
            ]
        },
        {
            name: 'buildingProcess',
            title: 'Ход строительства',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                    {
                        name: 'title',
                        title: 'Заголовок',
                        type: 'string'
                    },
                    {
                        name: 'text',
                        title: 'Описание',
                        type: 'text'
                    },
                    {
                        name: 'image',
                        title: 'Изображение',
                        type: 'image'
                    }
                ]
                }
            ]
        },
        {
            name: 'galleryImages',
            title: 'Галерея',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
        {
            name: 'mapLocation',
            title: 'Расположение комплекса',
            description: 'Укажите ссылку на яндекс карту',
            type: 'string'
        }
        
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'year',
            media: 'heroImage'
        }
    }
    
})