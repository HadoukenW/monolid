import { defineType } from 'sanity'

export const seo = defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Заголовок страницы',
            type: 'string',
            validation: (Rule) => Rule.required().warning('Заголовок должен быть менее 80 символов').max(80),

        },
        {
            name: 'description',
            title: 'Описание страницы',
            type: 'string',
            validation: (Rule) => Rule.required().warning('Описание должно быть менее 160 символов').max(160),
        },
        {
            name: 'ogImage',
            title: 'Превью изображение страницы',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'keywords',
            title: 'Ключевые слова',
            description: '(Через запятую)',
            type: 'text',
        },
    ]
})