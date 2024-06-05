import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
export const zhkevropeiskii = defineType({
    name: 'zhk-evropeiskii',
    title: 'ЖК Европейский',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'zhk-evropeiskii'}),
        {
            name: 'title',
            title: 'Название объекта',
            type: 'string'
        },
        {
            name: 'photos',
            title: 'Фото планировки',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'properties',
            title: 'Характеристики',
            type: 'object',
            fields: [
                {
                    name: 'ploshaduchastkadomovladenia',
                    title: 'Площадь участка домовладения',
                    type: 'string'
                },
                {
                    name: 'ploshaduchastka',
                    title: 'Общая площадь',
                    type: 'string'
                },
                {
                    name: 'visotaPotolkov',
                    title: 'Высота потолков',
                    type: 'string'
                },
                {
                    name: 'ploshadTerrasy',
                    title: 'Площадь террасы',
                    type: 'string'
                },
                {
                    name: 'kitchenStolovayaGostinaya',
                    title: 'Кухня-столовая-гостиная',
                    type: 'string'
                }
            ]
        },
        {
            name: 'price',
            title: 'Цена',
            description: '(Если есть)',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
})