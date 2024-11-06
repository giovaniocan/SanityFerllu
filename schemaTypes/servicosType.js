import { defineField, defineType } from "sanity";

export const servicosType = defineType({
    name: "services_type",
    title: "Cadastro de Serviços",
    type: "document",
    fields: [
        defineField({
            name: "title_service",
            title: "Nome do Serviço",
            type: "string",
        }),
        defineField({
            name: "service_description",
            title: "Descrição do Serviço",
            type: "string",
        }),
        defineField({
            name: "service_advantages",
            title: "Vantagens do Serviço",
            type: "string",
        }),
    ]
})