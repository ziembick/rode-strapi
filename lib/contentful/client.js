const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'ziembick.github.io/rode-strapi/posts',
});
