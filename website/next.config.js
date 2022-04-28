/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    NEXT_REVALIDATE: process.env.NEXT_REVALIDATE,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["nl", "en"],
  },
}
