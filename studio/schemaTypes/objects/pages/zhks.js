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
        },
        {
            name: 'matchingUrl',
            title: 'Связь между планировками (ссылка)',
            type: 'string'
        },
        {
            name: 'pageSlug',
            title: 'Ссылка на страницу',
            type: 'string'
        },
        {
            name: 'isCottage',
            title: 'Это не жилой комплекс?',
            type: 'boolean'
        },
        {
            hidden: ({document}) => !document?.isCottage,
            name: 'cottageUrl',
            title: 'Ссылка на объект',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Название ЖК',
            type: 'string'
        },
        {
            name: 'city',
            title: 'Город',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Регион/город',
            type: 'string'
        },
        {
            name: 'buildingType',
            title: 'Тип строения',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Год',
            type: 'string'
        },
        {
            name: 'isInProgress',
            title: 'В процессе строительства?',
            type: 'boolean'
        },
        {
            name: 'heroImage',
            title: 'Баннер-фото',
            type: 'image'
        },
        {
            name: 'aboutSectionData',
            title: 'О ЖК',
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
                    },
                    {
                        name: 'video',
                        title: 'Ссылка на видео',
                        type: 'string'
                    }
                ]
                }
            ]
        },
        {
            name: 'isTherePreGallerySection',
            title: 'Есть секция "Предварительная галерея"',
            type: 'boolean'
        },
        {
            hidden: ({document}) => !document?.isTherePreGallerySection,
            name: 'preGallerySectionData',
            title: 'Секция "Предварительная галерея"',
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
            name: 'buildingProcess',
            title: 'Процесс строительства',
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
            name: 'mapLocation',
            title: 'Ссылка на карту',
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