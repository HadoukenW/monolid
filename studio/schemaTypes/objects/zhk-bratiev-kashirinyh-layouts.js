import {defineField, defineType} from 'sanity'

export const zhkBratievKashirinyh = defineType({
    name: 'zhk-bratiev-kashirinyh',
    title: 'ЖК Братьев кашириных',
    type: 'document',
    fields: [
        {
            name: 'photo',
            title: 'Фото планировки',
            type: 'image',
            options: {
                hotspot: true,
                metadata: ['lqip'],
                crop: 'focalpoint',

            },
            
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
            type: 'string'
        }
    ]
})