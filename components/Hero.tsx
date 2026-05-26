import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">实时更新最新免费方案</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          想用 <span className="gradient-text">Claude Opus</span>
          <br />
          但不想<span className="gradient-text">付钱</span>？
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-medium">
          我就是要免费的 Opus！🚀
        </p>
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          这里汇集了最实用的免费使用技巧和强大的免费替代方案，让你不花一分钱也能享受顶级 AI 模型
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/tips"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity glow-orange"
          >
            💡 查看免费技巧
          </Link>
          <Link
            href="/alternatives"
            className="w-full sm:w-auto bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
          >
            🆓 浏览替代方案
          </Link>
        </div>
      </div>
    </section>
  )
}