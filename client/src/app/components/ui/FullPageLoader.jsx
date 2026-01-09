import React from 'react'

const FullPageLoader = () => {
  return (
    <div className="w-full max-w-[280px] bg-white rounded-xl shadow-md p-4 animate-pulse border border-gray-100">
      {/* Image Area */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4" />
      
      {/* Title Line */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
      
      {/* Description Line */}
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-4" />
      
      {/* Price and Button Row */}
      <div className="flex justify-between items-center mt-4">
        <div className="h-6 bg-gray-200 rounded w-16" />
        <div className="h-8 bg-gray-200 rounded-full w-20" />
      </div>
    </div>
  )
}

export default FullPageLoader
