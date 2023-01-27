import React from 'react'
import Card from '../product_card/Card'

export default function FashionProduct(props) {
    const fashionProducts = ["men's clothing", "women's clothing"];
    return (
        <div className='flex flex-wrap mb-10'>
            {props.products.map(product => (
                fashionProducts.includes(product.category) && <Card key={product.id} title={product.title} description={product.description} price={product.price} image={product.image} id={product.id} />
            ))}
        </div>
    )
}
