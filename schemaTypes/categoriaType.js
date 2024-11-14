import { defineField, defineType } from "sanity";

export const categoriaType = defineType({
    name: "category_type",
    title: "Cadastro de Categorias",
    type: "document",
    fields: [
        defineField({
            name: "category_name",
            title: "Nome da categoria",
            type: "string",
        }),
        defineField({
            name: "products",
            title: "Produtos",
            type: "array",
            of: [
                defineField({
                    type: "object",
                    fields:[
                        defineField({
                                type: "image",
                                name: "image",
                                title: "Imagem da categoria",
                            }),
                            defineField({
                                name: "description",
                                title: "Descrição do produto",
                                type: "string",
                            })
                    ]
                })
            ]
        })
    ]
})