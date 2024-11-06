import { defineField, defineType } from 'sanity'

export const cuidadoType = defineType({
  name: 'cuidado',
  title: 'Cuidado',
  type: 'document',
  fields: [
    defineField({
      name: 'cuidados',
      title: 'Cuidados',
      type: 'array',
      of: [ // Aqui usamos "of" ao invés de "for"
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título',
              type: 'string',
            }),
            defineField({
              name: 'descricao',
              title: 'Descrição',
              type: 'string',
            }),
          ],
        },
        )
      ],
    }),
  ],
});