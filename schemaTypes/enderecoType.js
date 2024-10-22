import {defineField, defineType} from 'sanity'

export const enderecoType = defineType({
  name: 'endereco',
  title: 'endereco',
  type: 'document',
  fields: [
    defineField({
      name: 'rua',
      type: 'string',
    }),
    defineField({
        name: 'numero',
        type: 'string',
      }),
    defineField({
      name: 'bairro',
      type: 'string',
    }),
    defineField({
        name: 'cidade',
        type: 'string',
    }),
    defineField({
        name: 'estado',
        type: 'string',
      }),
    defineField({
      name: 'pais',
      type: 'string',
    }),
    defineField({
        name: 'cep',
        type: 'string',
    }),
  ],
})