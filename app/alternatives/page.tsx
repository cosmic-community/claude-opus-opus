import { getAllAlternatives } from '@/lib/cosmic'
import AlternativeCard from '@/components/AlternativeCard'

export const metadata = {
  title: '免费替代方案 - Claude Opus 免费指南',
  description: '探索所有免费的 AI 模型替代方案'
}

export default async function AlternativesPage() {
  const alternatives = await getAllAlternatives()

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">🆓 免费替代方案</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            这些免费的 AI 平台和工具可以替代付费的 Claude Opus 模型
          </p>
        </div>

        {alternatives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((alt) => (
              <AlternativeCard key={alt.id} alternative={alt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl mb-2">🔍</p>
            <p>暂无替代方案，敬请期待</p>
          </div>
        )}
      </div>
    </div>
  )
}