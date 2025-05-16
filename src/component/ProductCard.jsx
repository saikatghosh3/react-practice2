
import React from 'react'

const ProductCard = ({title, price, description}) => {


  return (
   
    <div style={{ border: '1px solid black', padding: '16px', margin: '10px'  }}>
        <h3>{title}</h3>
        <p>{price}</p>
        <h2>{description}</h2>
       
    </div>

  )
}

export default ProductCard
