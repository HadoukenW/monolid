import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
export const zhk82riverside = defineType({
    name: '81-2-zhk-riverside',
    title: '81.2 дом ЖК Академ Риверсайд',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: '81-2-zhk-riverside'}),
        {
            name: 'photo',
            title: 'Фото планировки',
            type: 'image'
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