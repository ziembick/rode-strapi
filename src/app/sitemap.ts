import type { MetadataRoute } from 'next'
import { getAllArticlesSlugs } from '../../lib/api'


const baseUrl = 'https://www.rodepsi.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/areas-de-atuacao`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-mim`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/psicanalista-em-sao-paulo`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/projeto-memorias-ancestrais`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  let articleRoutes: MetadataRoute.Sitemap = []

  try {
    const slugs = await getAllArticlesSlugs(false)

    articleRoutes = (slugs ?? []).map((item: { slug: string }) => ({
  url: `${baseUrl}/articles/${encodeURIComponent(item.slug)}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))
  } catch (error) {
    console.error('Erro ao buscar slugs da Contentful para o sitemap:', error)
  }

  return [...staticRoutes, ...articleRoutes]
}