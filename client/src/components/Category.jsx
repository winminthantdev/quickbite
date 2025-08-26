import React from 'react'
import Title from './Title'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <section className='container mx-auto px-4'>
      <Title title="Featured Categories" />
      <CategoryCard />
    </section>
  )
}

export default Category
