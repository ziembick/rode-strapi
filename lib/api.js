const ARTICLE_GRAPHQL_FIELDS_PREVIEW = `
  sys {
    id
  }
  title
  slug
  summary
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;

const ARTICLE_GRAPHQL_FIELDS_FULL = `
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
  const json = await response.json();
  console.log("Resposta Contentful", json);
  return json;
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

export async function getAllArticlesSlugs(isDraftMode = false) {
  const query = `query {
    knowledgeArticleCollection(
      where: { slug_exists: true },
      order: date_DESC,
      limit: 1000,
      preview: ${isDraftMode ? "true" : "false"}
    ) {
      items {
        slug
      }
    }
  }`;
  const articles = await fetchGraphQL(query, isDraftMode);
  return articles?.data?.knowledgeArticleCollection?.items;
}

export async function getAllArticles(limit = 100, isDraftMode = false) {
  const query = `query {
    knowledgeArticleCollection(
      where: { slug_exists: true },
      order: date_DESC,
      limit: ${limit},
      preview: ${isDraftMode ? "true" : "false"}
    ) {
      items {
        ${ARTICLE_GRAPHQL_FIELDS_PREVIEW}
      }
    }
  }`;
  const articles = await fetchGraphQL(query, isDraftMode);
  return extractArticleEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
  const query = `query {
    knowledgeArticleCollection(
      where: { slug: "${slug}" },
      limit: 1,
      preview: ${isDraftMode ? "true" : "false"}
    ) {
      items {
        ${ARTICLE_GRAPHQL_FIELDS_FULL}
      }
    }
  }`;
  const article = await fetchGraphQL(query, isDraftMode);
  return extractArticleEntries(article)[0];
}