import {defineField, defineType} from 'sanity'


export const mainPage = defineType({
    name: 'mainPage',
    title: 'Главная страница',
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
            name: 'mainPageSlider',
            title: 'Витрина Жилых Комплексов',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Заголовок',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Описание',
                            type: 'string',
                        },
                        {
                            name: 'image',
                            title: 'Изображение',
                            type: 'image',
                            options: { hotspot: true },
                        },

                    ],
                }
            ],
        },
        {
            name: 'mainPageNewZhks',
            title: 'Новые ЖК',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'zhks'}],
                    options: {
                        disableNew: true
                    }
                }
            ],
        }
        
        
    ],
    
    
})