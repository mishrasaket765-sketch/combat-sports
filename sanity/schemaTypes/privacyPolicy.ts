import {defineField, defineType} from "sanity";

export const privacyPolicy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",

  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "PRIVACY POLICY",
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: "effectiveDate",
      title: "Effective Date",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {title: "Normal", value: "normal"},
          ],
          lists: [
            {title: "Bullet", value: "bullet"},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sections",
      title: "Privacy Policy Sections",
      type: "array",
      validation: (Rule) => Rule.required().min(1),

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "number",
              title: "Section Number",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "title",
              title: "Section Title",
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
                  styles: [
                    {
                      title: "Normal",
                      value: "normal",
                    },
                  ],
                  lists: [
                    {
                      title: "Bullet",
                      value: "bullet",
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              number: "number",
              title: "title",
            },

            prepare({number, title}) {
              return {
                title: `${number}. ${title}`,
              };
            },
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Privacy Policy",
      };
    },
  },
});