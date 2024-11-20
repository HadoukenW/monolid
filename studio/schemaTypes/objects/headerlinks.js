import {defineField, defineType} from 'sanity'
import { IoLink } from "react-icons/io5";
export const headerlinks = defineType({
    name: 'headerlinks',
    title: 'Новости',
    type: 'object',

    fields: [
        {
            name: 'headerlinksLogo',
            title: 'Логотип',
            type: 'image'
        },
        {
            name: 'headerlinksNavigation',
            title: 'Ссылки шапки',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Название ссылки',
                            type: 'string'
                        },
                        {
                            name: 'link',
                            title: 'Ссылка',
                            type: 'string'
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media:  'link',
                        },
                        prepare(selection) {
                            const {title, media} = selection
                            return {
                                title: title,
                                media: IoLink
                            }
                        }
                    }
                }
            ],
            
        },
        {
            name: 'headerlinksContacts',
            title: 'Контактная информация',
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
                    name: 'address',
                    title: 'Адрес',
                    type: 'string'
                },
                {
                    name: 'socials',
                    title: 'Социальные сети / Мессенджеры',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'icon',
                                    title: 'Иконка',
                                    type: 'image'
                                },
                                {
                                    name: 'link',
                                    title: 'Ссылка',
                                    type: 'string'
                                },
                            ],
                        }
                    ],
                }
            ]
        },
        {
            name: 'headerlinksOpeningHours',
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
            
        }
    ],
})