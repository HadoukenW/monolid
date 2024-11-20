import {defineField, defineType} from 'sanity'
export const faq = defineType({
    name: 'faq',
    title: 'Ответы на вопросы',
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
            name: 'faq',
            title: 'Вопросы и ответы',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Вопрос и ответ',
                    fields: [
                        {
                            name: 'question',
                            title: 'Вопрос',
                            type: 'string',
                        },
                        {
                            name: 'answer',
                            title: 'Ответ',
                            type: 'normalText',
                            
                        }
                    ]
                }
            ]
        }
    ],
    
})