// app/tips/[slug]/page.tsx
import { getTipBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function TipDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const tip = await getTipBySlug(slug)

  if (!tip) {
    notFound()
  }

  const title = getMetafieldValue(tip.metadata?.title) || tip.title
  const content = getMetafieldValue(tip.metadata?.content)
  const category = getMetafieldValue(tip.metadata?.category)
  const featuredImage = tip.metadata?.featured_image

  return (
    <article className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/tips" 
          className="inline-flex items-center text-primary hover:text-primary-light mb-8"
        >
          ← 返回所有技巧
        </Link>

        {category && (
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {category}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
          {title}
        </h1>

        {featuredImage && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={title}
              width="800"
              height="450"
              className="w-full h-auto"
            />
          </div>
        )}

        {content && (
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </article>
  )
}