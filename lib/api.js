// Set a variable that contains all the fields needed for articles when a fetch for

import { revalidate } from "@/app/posts/page";

// content is performed
const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;
  const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ["articles"], revalidate: 60 }, 
  };
  const response = await fetch(url, options);
  return response.json();
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

export async function getAllArticles(
  // For this demo set the default limit to always return 3 articles.
  limit = 9,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const query = `query {
        knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
    isDraftMode ? "true" : "false"
  }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`;
  const articles = await fetchGraphQL(query, isDraftMode);
  return extractArticleEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
  const query = `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
    isDraftMode ? "true" : "false"
  }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`;
  const article = await fetchGraphQL(query, isDraftMode);
  return extractArticleEntries(article)[0];
}

// // Set a variable that contains all the fields needed for articles when a fetch for
// // content is performed
// const ARTICLE_GRAPHQL_FIELDS = `
//   sys {
//     id
//   }
//   title
//   slug
//   summary
//   details {
//     json
//     links {
//       assets {
//         block {
//           sys {
//             id
//           }
//           url
//           description
//         }
//       }
//     }
//   }
//   date
//   authorName
//   categoryName
//   articleImage {
//     url
//   }
// `;

// async function fetchGraphQL(query, preview = false) {
//   return fetch(
//    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
//         // Contentful content or draft content
//         Authorization: `Bearer ${
//           preview
//             ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
//             : process.env.CONTENTFUL_ACCESS_TOKEN
//         }`,
//       },
//       body: JSON.stringify({ query }),
//       // Associate all fetches for articles with an "articles" cache tag so content can
//       // be revalidated or updated from Contentful on publish
//       next: { tags: ["articles"] },
//       cache: 'no-store'
//     }
//   ).then((response) => response.json());
// }

// function extractArticleEntries(fetchResponse) {
//   return fetchResponse?.data?.knowledgeArticleCollection?.items;
// }

// export async function getAllArticles(
//   // For this demo set the default limit to always return 3 articles.
//   limit = 9,
//   // By default this function will return published content but will provide an option to
//   // return draft content for reviewing articles before they are live
//   isDraftMode = false
// ) {
//   const articles = await fetchGraphQL(
//     `query {
//         knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
//       isDraftMode ? "true" : "false"
//     }) {
//           items {
//             ${ARTICLE_GRAPHQL_FIELDS}
//           }
//         }
//       }`,
//     isDraftMode
//   );
//   return extractArticleEntries(articles);
// }

// export async function getArticle(
//   slug,
//   isDraftMode = false
// ) {
//   const article = await fetchGraphQL(
//     `query {
//         knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
//       isDraftMode ? "true" : "false"
//     }) {
//           items {
//             ${ARTICLE_GRAPHQL_FIELDS}
//           }
//         }
//       }`,
//     isDraftMode
//   );
//   return extractArticleEntries(article)[0];
// }
