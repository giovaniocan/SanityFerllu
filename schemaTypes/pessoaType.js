import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'Pessoa',
  title: 'pessoa',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
        name: 'nome',
        type: 'string',
      }),
    defineField({
        name: 'dtNascimento',
        type: 'datetime',
      }),
    defineField({
        name: 'email',
        type: 'string',
    }),
    defineField({
        name: 'telefone',
        type: 'string',
    }),
    defineField({
        name: 'imagePerfil',
        type: 'image',
    }),
    defineField({
        name: 'ativo',
        type: 'boolean',
    }),
    defineField({
        name: 'endereco',
        type: 'endereco', 
    }),
  ],
})