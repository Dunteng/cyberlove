'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <DotLottieReact
        src="https://lottie.host/b0a95dcd-e15a-4559-9399-e9383b138071/tCqL5RbsU1.lottie"
        loop
        autoplay
      />
      <h1 className="text-sm font-bold mb-4">你来到了没有人烟的荒原</h1>
      <Link
        href="/"
        className="text-sm inline-block px-6 py-3 text-white font-semibold bg-black rounded-full shadow-lg hover:shadow-xl"
      >
        返回首页
      </Link>
    </div>
  )
}

