import fs from "node:fs";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-08";

if (!projectId || !token) {
  throw new Error(
    "Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env before seeding.",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: false,
});

/**
 * Creates a Portable Text block.
 */
function block(text, style = "normal") {
  const key = Math.random().toString(36).slice(2);

  return {
    _type: "block",
    _key: key,
    style,
    children: [
      {
        _type: "span",
        _key: `${key}-span`,
        text: text.trim(),
        marks: [],
      },
    ],
    markDefs: [],
  };
}

/**
 * Converts the legal text files into Portable Text blocks.
 */
function parseLegal(raw) {
  return raw
    .split(/\r?\n/)
    .map((line) => line.replace(/•/g, "").trim())
    .filter(Boolean)
    .map((line) =>
      /^\d+\.\s/.test(line) ||
      /^PRIVACY POLICY$/.test(line) ||
      /^TERMS & CONDITIONS$/.test(line)
        ? block(line, "h2")
        : block(line),
    );
}

async function main() {
  // --------------------------------------------------
  // Read Privacy Policy and Terms & Conditions
  // --------------------------------------------------

  const privacy = fs.readFileSync(
    "content/privacy-policy-source.txt",
    "utf8",
  );

  const terms = fs.readFileSync(
    "content/terms-and-conditions-source.txt",
    "utf8",
  );

  // --------------------------------------------------
  // ABOUT PAGE
  // --------------------------------------------------

  const about = {
    _id: "about",
    _type: "about",

    // ==================================================
    // COMPONENT 1
    // ==================================================

    componentOne: {
      title: "Built to make fight information useful",

      description:
        "Combat Sports Analysis is a performance-analysis platform built for fighters, coaches, trainers, analysts, teams, and serious combat-sports enthusiasts. We bring professional combat-sports knowledge and structured information together so the details inside training and fight footage become easier to understand and act on.",

      keyPoints: [
        {
          _key: "component-one-point-1",
          _type: "keyPoint",
          text: "Break down techniques and tactical decisions",
        },
        {
          _key: "component-one-point-2",
          _type: "keyPoint",
          text: "Understand movement, timing, and defensive patterns",
        },
        {
          _key: "component-one-point-3",
          _type: "keyPoint",
          text: "Identify meaningful performance trends",
        },
        {
          _key: "component-one-point-4",
          _type: "keyPoint",
          text: "Turn fight footage into structured information",
        },
        {
          _key: "component-one-point-5",
          _type: "keyPoint",
          text: "Support better preparation and informed decisions",
        },
      ],

      image: undefined,
    },

    // ==================================================
    // COMPONENT 2
    // ==================================================

    componentTwo: {
      title: "Analysis built around the people inside the process",

      description:
        "The platform is designed to give fighters and their teams a clearer analytical layer around training, competition, and performance. It helps organize the information already present in footage and fight preparation without replacing the experience and judgement of coaches, trainers, medical professionals, or athletes.",

      keyPoints: [
        {
          _key: "component-two-point-1",
          _type: "keyPoint",
          text: "Designed for fighters and athletes",
        },
        {
          _key: "component-two-point-2",
          _type: "keyPoint",
          text: "Useful for coaches and trainers",
        },
        {
          _key: "component-two-point-3",
          _type: "keyPoint",
          text: "Supports performance analysts and teams",
        },
        {
          _key: "component-two-point-4",
          _type: "keyPoint",
          text: "Creates structure around fight footage",
        },
        {
          _key: "component-two-point-5",
          _type: "keyPoint",
          text: "Turns information into practical insights",
        },
      ],

      image: undefined,
    },

    // ==================================================
    // COMPONENT 3
    // ==================================================

    componentThree: {
      boxes: [
        {
          _key: "highlight-box-1",
          _type: "highlightBox",
          smallTitle: "Technique",
          description:
            "Understand the technical details behind striking, movement, defense, and combinations.",
        },
        {
          _key: "highlight-box-2",
          _type: "highlightBox",
          smallTitle: "Performance",
          description:
            "Identify patterns and meaningful performance information across training and competition.",
        },
        {
          _key: "highlight-box-3",
          _type: "highlightBox",
          smallTitle: "Insight",
          description:
            "Turn complex combat-sports information into clear and actionable insights.",
        },
      ],
    },
  };

  // --------------------------------------------------
  // Create / Replace Sanity Documents
  // --------------------------------------------------

  await client
    .transaction()

    .createOrReplace({
      _id: "privacyPolicy",
      _type: "privacyPolicy",
      title: "Privacy Policy",
      lastUpdated: "2026-09-04",
      content: parseLegal(privacy),
    })

    .createOrReplace({
      _id: "termsAndConditions",
      _type: "termsAndConditions",
      title: "Terms & Conditions",
      lastUpdated: "2026-09-04",
      content: parseLegal(terms),
    })

    .createOrReplace(about)

    .commit();

  console.log(`Successfully seeded Sanity dataset: ${dataset}`);
}

main().catch((error) => {
  console.error("Sanity seed failed:");
  console.error(error);
  process.exit(1);
});