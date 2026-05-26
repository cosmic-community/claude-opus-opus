import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-dark-900/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🆓</span>
            <span className="font-bold text-lg gradient-text hidden sm:inline">免费 Opus 指南</span>
            <span className="font-bold text-lg gradient-text sm:hidden">免费 Opus</span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            <Link href="/tips" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
              💡 技巧
            </Link>
            <Link href="/alternatives" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
              🆓 替代方案
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}