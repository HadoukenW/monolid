import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'


export const zhk1712 = defineType({
    name: 'zhk-1712',
    title: 'ЖК 1712',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'zhk-1712'}),
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
        },
        {
            name: 'isAvailable',
            title: 'В наличии?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            },
            initialValue: true
        }
    ],
    preview: {
        select: {
            title: 'rooms',
            subtitle: 'price',
            media: 'photo'
        }
    }
})