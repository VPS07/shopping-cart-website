import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { emptyCart } from '../../features/cartDataSlice';

export default function ItemsBottom() {
    const totalPrice = useSelector(state => state.cartDataReducer.totalPrice);
    const dispatch = useDispatch();
    return (
        <div className='flex justify-end mx-28 mb-6 pr-6 pt-5 pb-3 space-x-7 border-r-[1px] border-l-[1px] border-b-[1px] border-black'>
            <button className='text-white bg-red-500 hover:bg-red-600 p-[6px] rounded' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            <Link to="/" className='text-white bg-blue-500 hover:bg-blue-600 p-[6px] rounded'>Shop More</Link>
            <button className='text-white bg-green-500 hover:bg-green-600 p-[6px] rounded'>Checkout</button>
            <p className='font-bold'>{`Grand Total: $${totalPrice}`}</p>
        </div>
    )
}
