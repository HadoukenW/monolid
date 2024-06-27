import {defineField, defineType} from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
export const blog = defineType({
    name: 'blog',
    title: 'Новости',
    type: 'document',
    orderings: [orderRankOrdering],

    fields: [
        orderRankField({type: 'blog'}),
        {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            options: {collapsed: true},
            fields: [
                {
                    name: 'title',
                    title: 'Название страницы',
                    type: 'string'
                },
                {
                    name: 'description',
                    title: 'Описание страницы',
                    type: 'text'
                },
                {
                    name: 'keywords',
                    title: 'Ключевые слова',
                    type: 'string'
                },
                {
                    name: 'image',
                    title: 'Изображение',
                    type: 'image'
                }
            ]
        },
        {
            name: 'image',
            title: 'Изображение',
            type: 'image'
        },
        {
            name: 'blogTitle',
            title: 'Название',
            type: 'string'
        },
        {
            name: 'blogSlug',
            title: 'Ссылка',
            type: 'slug',
            options: {
                source: 'blogTitle',
                maxLength: 96
            }
        },
        {
            name: 'blogDescription',
            title: 'Описание',
            type: 'normalText'
        },
        {
            name: 'addedAt',
            title: 'Дата добавления',
            type: 'date',
            options: {
                dateFormat: 'DD.MM.YYYY',
                calendarTodayLabel: 'Сегодня'
            }
        }
    ],
    preview: {
        select: {
            title: 'blogTitle',
            media: 'image'
        }
    }
})