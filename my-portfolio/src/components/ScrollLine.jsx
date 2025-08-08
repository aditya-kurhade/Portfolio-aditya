import React, { useEffect, useState } from 'react'

const ScrollLine = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const scrolled = (window.scrollY / totalHeight) * 100
        setScrollHeight(scrolled)
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <div className="fixed left-120 top-30 h-full w-6 flex items-start justify-center z-50">
  <div className="relative w-1 h-full">
    {/* Line */}
    <div
      className="absolute left-0 top-0 w-1 bg-gradient-to-b from-pink-500 via-orange-400 to-blue-400 rounded-full transition-all duration-200"
      style={{ height: `${scrollHeight}%` }}
    ></div>

    {/* Dot that follows the line */}
    <div
      className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 shadow-md transition-all duration-200"
      style={{ top: `calc(${scrollHeight}% - 6px)` }}
    ><span className="absolute top-0 left-8 text-xs text-black font-semibold">
  {Math.round(scrollHeight)}%
</span></div>

  </div>
</div>

  )
}

export default ScrollLine
