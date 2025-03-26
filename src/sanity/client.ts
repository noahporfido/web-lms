import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: false,
});
