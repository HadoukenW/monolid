import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'


export const vtorichkazhkBratievKashirinyh = defineType({
    name: 'vtorichka-zhk-bratiev-kashirinyh',
    title: 'ЖК Братьев Кашириных 102 / 98 А',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'vtorichka-zhk-bratiev-kashirinyh'}),
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
    ],
    preview: {
        select: {
            title: 'rooms',
            media: 'photo'
        }
    }
})