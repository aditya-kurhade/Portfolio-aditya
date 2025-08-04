import React from 'react'
import { LinkPreviewDemo } from './LinkPreviewDemo.jsx';

const ExpertSection = () => {
  return (
    <div className="bg-white shadow-md w-[400px] rounded-[10px] p-2 ml-4">
      <h1 className="text-2xl font-bold p-2 m-2 font-roboto">My Expert Area</h1>
      <div className="expert-area">
        <LinkPreviewDemo />
      </div>
    </div>
  )
}

export default ExpertSection