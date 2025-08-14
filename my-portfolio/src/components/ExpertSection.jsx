import React from 'react'
import { LinkPreviewDemo } from './LinkPreviewDemo.jsx';

const ExpertSection = () => {
  return (
    <div className="bg-white shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-[10px] p-4 sm:p-6 mx-auto sm:mx-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 font-roboto">
        My Expert Area
      </h1>
      <div className="expert-area">
        <LinkPreviewDemo />
      </div>
    </div>
  )
}

export default ExpertSection
