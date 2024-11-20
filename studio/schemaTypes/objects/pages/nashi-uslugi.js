import {defineField, defineType} from 'sanity'
export const nashiUslugi = defineType({
    name: 'nashiUslugi',
    title: 'Наши услуги',
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
            name: 'nashiUslugi',
            title: 'Услуги',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Услуга',
                    fields: [
                        {
                            name: 'uslugaImage',
                            title: 'Изображение заднего фона услуги',
                            type: 'image'
                        },
                        {
                            name: 'uslugaTitle',
                            title: 'Название услуги',
                            type: 'string',
                        },
                        {
                            name: 'uslugaArray',
                            title: 'Описаниу(я) услуги',
                            type: 'array',
                            of: [
                                {
                                    type: 'string',
                                }
                            ]
                            
                        }
                    ]
                }
            ]
        }
    ],
    
})