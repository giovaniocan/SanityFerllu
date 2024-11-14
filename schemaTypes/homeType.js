import { defineField, defineType } from "sanity";

export const recentProducts = defineType({
    name: "recentes",
    title: "Cadastro de Produtos recentes",
    type: "document",
    fields: [
        defineField({
            name: "recent_products",
            title: "Produtos",
            type: "array",
            validation: (Rule) => Rule.max(3).error("Você pode adicionar somente 3 produtos."),
            of: [
                defineField({
                    type: "object",
                    fields:[
                        defineField({
                                type: "image",
                                name: "image",
                                title: "Imagem do produto",
                            }),
                            defineField({
                                name: "description",
                                title: "Nome do produto",
                                type: "string",
                            })
                    ]
                })
            ]
        })
    ]
})
export const higlightProducts = defineType({
    name: "destaques",
    title: "Cadastro de Produtos em destaque",
    type: "document",
    fields: [
        defineField({
            name: "highlight_products",
            title: "Produtos",
            type: "array",
            validation: (Rule) => Rule.max(3).error("Você pode adicionar somente 3 produtos."),
            of: [
                defineField({
                    type: "object",
                    fields:[
                        defineField({
                                type: "image",
                                name: "image",
                                title: "Imagem do produto"
                            }),
                            defineField({
                                name: "product",
                                type: "object",
                                fields:[
                                    defineField({
                                        type: "string",
                                        name: "product_title",
                                        title: "Nome do produto"
                                    }),
                                    defineField({
                                        type: "string",
                                        name: "product_description",
                                        title: "Descrição do produto"
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    ]
})