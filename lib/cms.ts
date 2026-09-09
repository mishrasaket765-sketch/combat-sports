import { cache } from "react";
import { client, hasSanity } from "./sanity";
import {
  ABOUT_QUERY,
  PRIVACY_POLICY_QUERY,
  TERMS_QUERY,
} from "@/sanity/lib/queries";
export const getAbout = cache(async () => {
  if (!hasSanity || !client) return null;
  return client.fetch(ABOUT_QUERY);
});
export const getPrivacyPolicy = cache(async () => {
  if (!hasSanity || !client) return null;
  return client.fetch(PRIVACY_POLICY_QUERY);
});
export const getTerms = cache(async () => {
  if (!hasSanity || !client) return null;
  return client.fetch(TERMS_QUERY);
});
