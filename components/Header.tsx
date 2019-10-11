import React from 'react'
import { NextComponentType } from 'next'

import Link from 'next/link'

const Header: NextComponentType = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 nav">
      <div className="container flex mx-auto z-50 justify-between items-center h-full">
        <Link href="/">
          <a className="text-white text-xl font-normal no-underline">田写</a>
        </Link>

        <div>
          <Link href="/open-source">
            <a className="text-white ml-4 font-light no-underline">开源</a>
          </Link>
          <a
            href="https://github.com/tianyong90"
            target="_blank"
            className="text-white ml-4 font-light no-underline"
          >GitHub</a
          >
          <a
            href="https://weibo.com/1707227001"
            target="_blank"
            className="text-white ml-4 font-light no-underline"
          >微博</a
          >
        </div>
      </div>
    </nav>
  )
}

export default Header
