import {defineField, defineType} from 'sanity'

export const historiaType = defineType({
  name: 'historia',
  title: 'Historia',
  type: 'document',
  fields: [
    defineField({
      name: 'historia',
      type: 'string',
    }),
  ],
})