import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

/**
 * Reusable key point
 */
const keyPoint = defineArrayMember({
  type: "object",
  name: "keyPoint",
  title: "Key Point",

  fields: [
    defineField({
      name: "text",
      title: "Key Point",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(150)
          .error("Please enter a valid key point."),
    }),
  ],

  preview: {
    select: {
      title: "text",
    },
  },
});

/**
 * Performance Metric
 */
const performanceMetric = defineArrayMember({
  type: "object",
  name: "performanceMetric",
  title: "Performance Metric",

  fields: [
    defineField({
      name: "name",
      title: "Metric Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(100),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) =>
        Rule.max(200),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});

/**
 * About Feature
 */
const aboutFeature = defineArrayMember({
  type: "object",
  name: "aboutFeature",
  title: "About Feature",

  fields: [
    defineField({
      name: "title",
      title: "Feature Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(100),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) =>
        Rule.required()
          .min(20)
          .max(600),
    }),

    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description:
        "Optional icon identifier used by the frontend.",
      validation: (Rule) =>
        Rule.max(50),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});

/**
 * About Page
 */
export const about = defineType({
  name: "about",
  title: "About Page",
  type: "document",

  fields: [
    // =====================================================
    // HERO
    // =====================================================

    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",

      options: {
        collapsible: true,
        collapsed: false,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "ABOUT COMBAT SPORTS ANALYSIS",
          validation: (Rule) =>
            Rule.max(80),
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(150),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 6,
          validation: (Rule) =>
            Rule.required()
              .min(50)
              .max(1200),
        }),

        defineField({
          name: "keyPoints",
          title: "Key Points",
          description:
            "Optional supporting points displayed in the hero.",
          type: "array",
          of: [keyPoint],

          validation: (Rule) =>
            Rule.max(6),
        }),

        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",

          options: {
            hotspot: true,
          },

          validation: (Rule) =>
            Rule.required().error(
              "Hero image is required."
            ),
        }),
      ],

      preview: {
        select: {
          title: "title",
          media: "image",
        },

        prepare({ title, media }) {
          return {
            title: title || "About Hero",
            subtitle: "Hero Section",
            media,
          };
        },
      },
    }),

    // =====================================================
    // PERFORMANCE
    // =====================================================

    defineField({
      name: "performance",
      title: "Performance Section",
      type: "object",

      options: {
        collapsible: true,
        collapsed: true,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "PERFORMANCE TRACKING",
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",

          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(120),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 6,

          validation: (Rule) =>
            Rule.required()
              .min(30)
              .max(1200),
        }),

        defineField({
          name: "scaleLabel",
          title: "Scale Label",
          type: "string",
          initialValue: "Performance Rating",
        }),

        defineField({
          name: "scaleDescription",
          title: "Scale Description",
          type: "string",
          initialValue: "Rate your ability from 1–10.",
        }),

        defineField({
          name: "metrics",
          title: "Performance Metrics",
          type: "array",
          of: [performanceMetric],

          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(10),
        }),

        defineField({
          name: "image",
          title: "Section Image",
          type: "image",

          options: {
            hotspot: true,
          },
        }),
      ],

      preview: {
        select: {
          title: "title",
          media: "image",
        },

        prepare({ title, media }) {
          return {
            title: title || "Performance",
            subtitle: "Performance Tracking",
            media,
          };
        },
      },
    }),

    // =====================================================
    // PROGRESS
    // =====================================================

    defineField({
      name: "progress",
      title: "Progress Section",
      type: "object",

      options: {
        collapsible: true,
        collapsed: true,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "MEASURABLE PROGRESS",
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",

          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(120),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 7,

          validation: (Rule) =>
            Rule.required()
              .min(30)
              .max(1500),
        }),

        defineField({
          name: "image",
          title: "Section Image",
          type: "image",

          options: {
            hotspot: true,
          },
        }),
      ],

      preview: {
        select: {
          title: "title",
          media: "image",
        },

        prepare({ title, media }) {
          return {
            title: title || "Progress",
            subtitle: "Measurable Progress",
            media,
          };
        },
      },
    }),

    // =====================================================
    // FEATURES
    // =====================================================

    defineField({
      name: "features",
      title: "Platform Features",
      type: "object",

      options: {
        collapsible: true,
        collapsed: true,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "BUILT FOR ATHLETES",
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",

          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(120),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 5,

          validation: (Rule) =>
            Rule.max(1000),
        }),

        defineField({
          name: "items",
          title: "Features",
          type: "array",
          of: [aboutFeature],

          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(10),
        }),
      ],

      preview: {
        select: {
          title: "title",
          items: "items",
        },

        prepare({ title, items }) {
          return {
            title: title || "Platform Features",
            subtitle: `${items?.length || 0} features`,
          };
        },
      },
    }),

    // =====================================================
    // MODERN ATHLETE
    // =====================================================

    defineField({
      name: "modernAthlete",
      title: "Modern Combat Sports Athlete",
      type: "object",

      options: {
        collapsible: true,
        collapsed: true,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "OUR APPROACH",
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",

          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(150),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 7,

          validation: (Rule) =>
            Rule.required()
              .min(30)
              .max(1500),
        }),

        defineField({
          name: "keyPoints",
          title: "Key Points",
          type: "array",
          of: [keyPoint],

          validation: (Rule) =>
            Rule.min(1)
              .max(8),
        }),

        defineField({
          name: "image",
          title: "Section Image",
          type: "image",

          options: {
            hotspot: true,
          },
        }),
      ],

      preview: {
        select: {
          title: "title",
          media: "image",
        },

        prepare({ title, media }) {
          return {
            title:
              title ||
              "Modern Combat Sports Athlete",
            subtitle: "Our Approach",
            media,
          };
        },
      },
    }),

    // =====================================================
    // CTA
    // =====================================================

    defineField({
      name: "cta",
      title: "Call To Action",
      type: "object",

      options: {
        collapsible: true,
        collapsed: true,
      },

      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "KEEP IMPROVING",
        }),

        defineField({
          name: "title",
          title: "Title",
          type: "string",

          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(120),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,

          validation: (Rule) =>
            Rule.required()
              .min(20)
              .max(500),
        }),

        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",

          validation: (Rule) =>
            Rule.max(50),
        }),

        defineField({
          name: "buttonUrl",
          title: "Button URL",
          type: "string",

          validation: (Rule) =>
            Rule.max(300),
        }),
      ],

      preview: {
        select: {
          title: "title",
        },

        prepare({ title }) {
          return {
            title: title || "Call To Action",
            subtitle: "Final CTA",
          };
        },
      },
    }),
  ],

  // =====================================================
  // DOCUMENT PREVIEW
  // =====================================================

  preview: {
    select: {
      title: "hero.title",
      media: "hero.image",
    },

    prepare({ title, media }) {
      return {
        title: title || "About Page",
        subtitle: "Combat Sports Analysis",
        media,
      };
    },
  },
});