import React from 'react'

const Title = ({title}) => {
  return (
    <div className="my-4 md:my-8">
      <h3 className='text-lg md:text-3xl font-bold'>{title}</h3>
    </div>
  )
}

export default Title
