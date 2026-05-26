import Link from 'next/link'
import { FreeAlternative } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function AlternativeCard({ alternative }: { alternative: FreeAlternative }) {
  const name = getMetafieldValue(alternative.metadata?.name) || alternative.title
  const description = getMetafieldValue(alternative.metadata?.description)
  const replaces = getMetafieldValue(alternative.metadata?.replaces)
  const logoImage = alternative.metadata?.logo_image

  return (
    <Link href={`/alternatives/${alternative.slug}`} className="group block">
      <article className="glass-card rounded-2xl p-6 h-full hover:border-primary/50 transition-all hover:-translate-y-1">
        <div className="flex items-start gap-4 mb-4">
          {logoImage ? (
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-2 flex-shrink-0">
              <img
                src={`${logoImage.imgix_url}?w=120&h=120&fit=contain&auto=format,compress`}
                alt={name}
                width="56"
                height="56"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center text-2xl flex-shrink-0">
              🆓
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors truncate">
              {name}
            </h3>
            {replaces && (
              <p className="text-xs text-gray-500 mt-1">
                替代: <span className="text-primary">{replaces}</span>
              </p>
            )}
          </div>
        </div>
        {description && (
          <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
        )}
      </article>
    </Link>
  )
}