import React from 'react'
import Card from './Card'

export default function Cards(props) {
    return (
        <div className='flex flex-wrap mb-10'>
            {props.products.map(product => (
                <Card key={product.id} title={product.title} description={product.description} price={product.price} image={product.image} id={product.id} />
            ))}
        </div>
    )
}
