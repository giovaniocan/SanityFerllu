import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name:'infoBasicas',
  title:'Informações básicas',
  type:'document',
  fields: [
    defineField({
      name: 'whatsapp',
      type: 'string',
    }),
    defineField({
        name: 'instagran',
        type: 'string',
      }),
      defineField({
        name: 'email',
        type: 'string',
      }),
      defineField({
        name: 'endereco',
        type: 'string',
      }),
      defineField({
        name: 'horarioAtendimento',
        type: 'string',
      }),
  ],
})