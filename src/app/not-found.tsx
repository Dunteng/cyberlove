import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md mx-4">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">页面未找到</h3>
        <p className="text-gray-600 mb-8">抱歉，您访问的页面似乎已经迷失在了网络的星辰大海中...</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}