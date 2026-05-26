import Link from 'next/link'
import { Tip } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TipCard({ tip }: { tip: Tip }) {
  const title = getMetafieldValue(tip.metadata?.title) || tip.title
  const category = getMetafieldValue(tip.metadata?.category)
  const content = getMetafieldValue(tip.metadata?.content)
  const featuredImage = tip.metadata?.featured_image

  // Strip HTML for preview
  const textPreview = content.replace(/<[^>]*>/g, '').substring(0, 120)

  return (
    <Link href={`/tips/${tip.slug}`} className="group block">
      <article className="glass-card rounded-2xl overflow-hidden h-full hover:border-primary/50 transition-all hover:-translate-y-1">
        {featuredImage && (
          <div className="aspect-video overflow-hidden bg-dark-700">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={title}
              width="400"
              height="225"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <span className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
              {category}
            </span>
          )}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          {textPreview && (
            <p className="text-gray-400 text-sm line-clamp-3">{textPreview}...</p>
          )}
        </div>
      </article>
    </Link>
  )
}