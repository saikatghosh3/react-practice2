import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {

  const products = [
    {
      id: 1,
      title: 'Laptop',
      price: 999,
      description: 'A high-performance laptop.',
    },
    {
      id: 2,
      title: 'Headphones',
      price: 199,
      description: 'Noise-cancelling headphones.',
    },
    {
      id: 3,
      title: 'Smartphone',
      price: 699,
      description: 'A latest model smartphone.',
    },
  ];


  return (
    
    <div>
      <h2> our products</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
      {products.map((item)=>(
        <ProductCard 
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price} />
      ))}
      </div>
    </div>
    
  )
}

export default ProductList
