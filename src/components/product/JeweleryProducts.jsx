import React from 'react'
import Card from '../product_card/Card';

export default function JeweleryProducts(props) {
    return (
        <div className='flex flex-wrap mb-10'>
            {props.products.map(product => (
                product.category == "jewelery" && <Card key={product.id} title={product.title} description={product.description} price={product.price} image={product.image} id={product.id} />
            ))}
        </div>
    )
}
