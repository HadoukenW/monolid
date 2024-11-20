import {defineField, defineType} from 'sanity'


export const footerlinks = defineType({
    name: 'footerlinks',
    title: 'Подвал',
    type: 'object',

    fields: [
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
        },
        {
            name: 'copyright',
            title: 'Копирайт',
            type: 'string'
        },
        {
            name: 'inn',
            title: 'ИНН',
            type: 'string'
        },
        {
            name: 'orgnip',
            title: 'ОРГНИП',
            type: 'string',
        },
        {
            name: 'copyrightPolicy',
            title: 'Политика конфиденциальности',
            type: 'normalText'
        }
    ],
})