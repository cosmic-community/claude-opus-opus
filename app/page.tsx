import Link from 'next/link'
import { getAllTips, getAllAlternatives } from '@/lib/cosmic'
import TipCard from '@/components/TipCard'
import AlternativeCard from '@/components/AlternativeCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [tips, alternatives] = await Promise.all([
    getAllTips(),
    getAllAlternatives()
  ])

  const featuredTips = tips.slice(0, 3)
  const featuredAlternatives = alternatives.slice(0, 4)

  return (
    <div>
      <Hero />

      {/* Tips Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="gradient-text">💡 实用技巧</span>
              </h2>
              <p className="text-gray-400">免费使用 Claude Opus 的最佳方法</p>
            </div>
            <Link href="/tips" className="text-primary hover:text-primary-light font-medium hidden sm:block">
              查看全部 →
            </Link>
          </div>

          {featuredTips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTips.map((tip) => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">暂无技巧内容</div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/tips" className="text-primary hover:text-primary-light font-medium">
              查看全部技巧 →
            </Link>
          </div>
        </div>
      </section>

      {/* Alternatives Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="gradient-text">🆓 免费替代方案</span>
              </h2>
              <p className="text-gray-400">这些免费 AI 平台同样强大</p>
            </div>
            <Link href="/alternatives" className="text-primary hover:text-primary-light font-medium hidden sm:block">
              查看全部 →
            </Link>
          </div>

          {featuredAlternatives.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredAlternatives.map((alt) => (
                <AlternativeCard key={alt.id} alternative={alt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">暂无替代方案</div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/alternatives" className="text-primary hover:text-primary-light font-medium">
              查看全部方案 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}