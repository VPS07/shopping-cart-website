import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartDataSlice';

export default function Card({ title, price, description, image, id }) {
    const dispatch = useDispatch();
    let shortTitle = title.length > 34 ? title.substring(0, 24) : title;
    let shortDescription = description.substring(0, 34);
    const productObj = {
        title,
        price,
        description,
        image,
        id,
        quantity: 1
    }

    return (
        <div className='flex flex-col px-5 pt-4 w-72 h-[22rem] border-2 mt-12 ml-20'>
            <div className='flex flex-col items-start space-y-1'>
                <img src={image} alt="img" className='w-40 h-40 mb-5' />
                <p className='font-bold'>{`${shortTitle}...`}</p>
                <p className='text-xs'>{`${shortDescription}...`}</p>
                <p><span className='font-bold'>Price: $</span>{price}</p>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm px-10 py-1 rounded mt-3' onClick={() => dispatch(addToCart(productObj))}>Add to Cart</button>
        </div>
    )
}
