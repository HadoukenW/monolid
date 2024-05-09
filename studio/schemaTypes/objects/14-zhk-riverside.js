import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
export const zhk14 = defineType({
    name: '14-zhk-riverside',
    title: '14 дом ЖК Академ Риверсайд',
    type: 'document',
    orderings: [orderRankOrdering],

    fields: [
        orderRankField({type: '14-zhk-riverside'}),
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
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'rooms',
            media: 'photo'
        }
    }
})