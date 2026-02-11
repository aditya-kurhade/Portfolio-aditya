import React from 'react'
import { LinkPreviewDemo } from './LinkPreviewDemo.jsx';

const ExpertSection = () => {
  return (
    <div className="bg-white shadow-md border border-gray-100 w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 font-roboto border-b border-gray-100 pb-3">
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">My Expert Area</span>
      </h1>
      <div className="expert-area">
        <LinkPreviewDemo />
      </div>
    </div>
  )
}

export default ExpertSection
