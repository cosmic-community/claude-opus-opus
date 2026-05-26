export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-3xl mb-4">🆓</div>
        <p className="text-gray-400 mb-2">免费使用 Claude Opus 完全指南</p>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} 所有内容仅供学习参考
        </p>
      </div>
    </footer>
  )
}