import { defineQuery } from "next-sanity";

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0]{
    _id,

    hero{
      eyebrow,
      title,
      description,

      keyPoints[]{
        _key,
        text
      },

      image{
        asset,
        hotspot,
        crop
      }
    },

    performance{
      eyebrow,
      title,
      description,
      scaleLabel,
      scaleDescription,

      metrics[]{
        _key,
        name,
        description
      },

      image{
        asset,
        hotspot,
        crop
      }
    },

    progress{
      eyebrow,
      title,
      description,

      image{
        asset,
        hotspot,
        crop
      }
    },

    features{
      eyebrow,
      title,
      description,

      items[]{
        _key,
        title,
        description,
        icon,

        image{
          asset,
          hotspot,
          crop
        }
      }
    },

    modernAthlete{
      eyebrow,
      title,
      description,

      keyPoints[]{
        _key,
        text
      },

      image{
        asset,
        hotspot,
        crop
      }
    },

    cta{
      eyebrow,
      title,
      description,
      buttonText,
      buttonUrl
    }
  }
`);

export const PRIVACY_POLICY_QUERY = defineQuery(`
  *[_type == "privacyPolicy"][0]{
    _id,
    _updatedAt,

    hero{
      title,
      backgroundImage
    },

    effectiveDate,
    lastUpdated,

    introduction,

    sections[]{
      number,
      title,
      content
    }
  }
`);

export const TERMS_QUERY = defineQuery(`
  *[_type == "termsAndConditions"][0]{
    _id,
    title,
    slug,
    effectiveDate,
    lastUpdated,
    introduction,
    "sections": sections | order(order asc){
      number,
      heading,
      content,
      order
    },
    contactInformation
  }
`);