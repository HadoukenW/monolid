import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
export const vtorichka = defineType({
    name: 'vtorichka',
    title: 'Вторичка',
    type: 'document',
    orderings: [orderRankOrdering],

    fields: [
        orderRankField({type: 'vtorichka'}),
        {
            name: 'photo',
            title: 'Фото вторички',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                layout: 'grid',
            },
            validation: (Rule) => Rule.required().min(1).error('Хотя бы одно изображение обязательно для заполнения'),
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
                    {title: 'Земельный участок', value: 'Земельный участок'},
                    {title: 'Дом и земельный участок', value: 'Дом и земельный участок'},
                ]
            },
            validation: (Rule) => Rule.required().error('Поле обязательно для заполнения'),
        },
        {
            name: 'price',
            title: 'Цена',
            type: 'string',
        },
        {
            name: 'isAvailable',
            title: 'В наличии?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            },
            initialValue: true
        },
        {
            name: 'description',
            title: 'Описание',
            type: 'normalText',
            

            
        }
    ],
    preview: {
        select: {
            title: 'rooms',
            subtitle: 'price',
        },
    }
})