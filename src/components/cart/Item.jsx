import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartDataSlice';

export default function Item({ title, price, description, image, id, quantity, index }) {
    const dispatch = useDispatch();
    return (
        <div className='flex mx-28 text-sm font-extralight pt-5 pb-3 border-r-[1px] border-l-[1px] border-b-[1px] border-black'>
            <div className='w-12 pl-2'>{index + 1}</div>
            <div className='w-40'>{title}</div>
            <img src={image} alt='img' className='w-44 h-44' />
            <div className='w-72 ml-8 mr-7'>{description}</div>
            <div className='w-36'>{`$${price}`}</div>
            <div className='w-36'>{quantity}</div>
            <div className='w-36'>{`$${price * quantity}`}</div>
            <div className='w-20'><button className='bg-red-500 hover:bg-red-600 p-2 rounded' onClick={() => dispatch(removeFromCart(id))}><RiDeleteBin5Fill className='text-white text-lg' /></button></div>
        </div>
    )
}
