import {defineField, defineType} from 'sanity'
export const contacts = defineType({
    name: 'contacts',
    title: 'Контакты',
    type: 'document',

    fields: [
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            options: {
                collapsible: true,
                collapsed: true
            }
        },
        {
            name: 'title',
            title: 'Название страницы',
            type: 'string',
        },
        {
            name: 'contacts',
            title: 'Контакты',
            type: 'object',
            fields: [
                {
                    name: 'phone',
                    title: 'Телефон(ы)',
                    type: 'array',
                    of: [
                        {
                            type: 'string'
                        }
                    ]
                },
                {
                    name: 'email',
                    title: 'Почта',
                    type: 'string'
                },
                {
                    name: 'address',
                    title: 'Адрес',
                    type: 'string'
                },
                {
                    name: 'openingHours',
                    title: 'Время работы',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            title: 'Режим работы',
                            fields: [
                                {
                                    name: 'days',
                                    title: 'Дни',
                                    type: 'string'
                                },
                                {
                                    name: 'time',
                                    title: 'Время работы',
                                    type: 'string'
                                },
                            ],
                            preview: {
                                select: {
                                    title: 'days',
                                    subtitle: 'time',
                                }
                            }
                        }
                    ]
                    
                },
                {
                    name: 'map',
                    title: 'Карта',
                    description: 'Установить точку на карте и скопировать ссылку с динамичной карты — (https://yandex.ru/map-constructor)',
                    type: 'string'
                },
                {
                    name: 'additionalInfo',
                    title: 'Дополнительная информация',
                    type: 'normalText'
                }
            ]
        }
    ],
    
})