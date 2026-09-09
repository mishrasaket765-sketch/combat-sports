import {defineField, defineType} from "sanity";

export const termsAndConditions = defineType({
  name: "termsAndConditions",
  title: "Terms & Conditions",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "effectiveDate",
      title: "Effective Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "sections",
      title: "Terms Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Section Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),

            defineField({
              name: "order",
              title: "Order",
              type: "number",
            }),
          ],

          preview: {
            select: {
              number: "number",
              heading: "heading",
            },

            prepare({number, heading}) {
              return {
                title: `${number}. ${heading}`,
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "contactInformation",
      title: "Contact Information",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      updated: "lastUpdated",
    },

    prepare({title, updated}) {
      return {
        title,
        subtitle: updated
          ? `Last Updated: ${updated}`
          : "Terms & Conditions",
      };
    },
  },
});