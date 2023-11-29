export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2023-11-21";

export const dataset = "production";
// export const dataset = assertValue(
//   process.env.SANITY_STUDIO_DATASET,
//   "Missing environment variable: SANITY_STUDIO_DATASET"
// );

export const projectId = "m9c5ybdd";
// export const projectId = assertValue(
//   process.env.SANITY_STUDIO_PROJECT_ID,
//   "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
// );

export const useCdn = true;

export const token = assertValue(
  process.env.SANITY_STUDIO_API_TOKEN,
  "Missing environment variable: SANITY_STUDIO_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
