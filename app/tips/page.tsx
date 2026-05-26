import { getAllTips } from '@/lib/cosmic'
import TipCard from '@/components/TipCard'

export const metadata = {
  title: '所有技巧 - 免费使用 Claude Opus',
  description: '浏览所有免费使用 Claude Opus 的实用技巧'
}

export default async function TipsPage() {
  const tips = await getAllTips()

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">💡 所有技巧</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            汇集所有免费使用 Claude Opus 模型的实用方法和技巧
          </p>
        </div>

        {tips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl mb-2">📝</p>
            <p>暂无技巧内容，敬请期待</p>
          </div>
        )}
      </div>
    </div>
  )
}