import React, { useState } from 'react'
import { LinkPreviewDemo } from './LinkPreviewDemo.jsx';

const ExpertSection = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const tagBase = 'text-[11px] font-semibold uppercase tracking-[0.2em] rounded-full px-3 py-1 border w-fit transition-colors duration-200'
  const activeTag = 'text-teal-700 bg-teal-50 border-teal-100'
  const inactiveTag = 'text-gray-500 bg-gray-50 border-gray-200'

  return (
    <div className="bg-white/95 shadow-md border border-teal-100 w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between gap-3 mb-4 border-b border-gray-100 pb-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-roboto">
            <span className="bg-gradient-to-r from-teal-700 via-sky-600 to-blue-600 bg-clip-text text-transparent">My Expert Area</span>
          </h1>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <p className={`${tagBase} ${!isFlipped ? activeTag : inactiveTag}`}>Development</p>
            <p className={`${tagBase} ${isFlipped ? activeTag : inactiveTag}`}>DSA</p>
          </div>
        </div>
        <button
          type="button"
          className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-gray-600 text-xs font-semibold ring-1 ring-black/5 hover:text-teal-700 hover:ring-teal-200"
          aria-label="Flip tags"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          Flip
        </button>
      </div>
      <div className="expert-area">
        <LinkPreviewDemo />
      </div>
    </div>
  )
}

export default ExpertSection
