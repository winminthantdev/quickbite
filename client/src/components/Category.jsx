import React from 'react'
import Title from './Title'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <section className='container mx-auto px-8 md:px-0 py-4'>
      <Title title="Featured Categories" />
      <CategoryCard />
    </section>
  )
}

export default Category
