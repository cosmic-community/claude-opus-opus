// app/alternatives/[slug]/page.tsx
import { getAlternativeBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function AlternativeDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const alternative = await getAlternativeBySlug(slug)

  if (!alternative) {
    notFound()
  }

  const name = getMetafieldValue(alternative.metadata?.name) || alternative.title
  const description = getMetafieldValue(alternative.metadata?.description)
  const replaces = getMetafieldValue(alternative.metadata?.replaces)
  const websiteUrl = getMetafieldValue(alternative.metadata?.website_url)
  const logoImage = alternative.metadata?.logo_image

  return (
    <article className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/alternatives" 
          className="inline-flex items-center text-primary hover:text-primary-light mb-8"
        >
          ← 返回所有方案
        </Link>

        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            {logoImage && (
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white p-3 flex-shrink-0">
                <img
                  src={`${logoImage.imgix_url}?w=200&h=200&fit=contain&auto=format,compress`}
                  alt={name}
                  width="96"
                  height="96"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{name}</h1>
              {replaces && (
                <p className="text-gray-400">
                  替代: <span className="text-primary font-medium">{replaces}</span>
                </p>
              )}
            </div>
          </div>

          {description && (
            <div className="prose prose-invert prose-lg max-w-none mb-8 prose-headings:text-white prose-a:text-primary">
              <p className="whitespace-pre-wrap">{description}</p>
            </div>
          )}

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              访问网站
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}