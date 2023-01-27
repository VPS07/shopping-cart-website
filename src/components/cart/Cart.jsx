import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import Item from './Item'
import ItemsBottom from './ItemsBottom'

export default function Cart() {
    const itemInCart = useSelector(state => state.cartDataReducer.productInCart);
    return (
        <>
            {itemInCart.length > 0 ? <div className='border-r-2 border-black'>
                <div className='flex font-bold text-sm mx-28 pt-20 pb-3 border-b-[1px] border-black'>
                    <div className='w-12 pl-2'>S.No</div>
                    <div className='w-40'>Product Name</div>
                    <div className='w-52 pl-4'>Product Image</div>
                    <div className='w-80 pl-6'>Description</div>
                    <div className='w-36 ml-7'>Price</div>
                    <div className='w-36'>Quantity</div>
                    <div className='w-36'>Total</div>
                    <div className='w-36 ml-7'>Action</div>
                </div>
                {
                    itemInCart.map((product, index) => (
                        <Item title={product.title} description={product.description} price={product.price} image={product.image} id={product.id} quantity={product.quantity} index={index} />
                    ))
                }
                <ItemsBottom />
            </div> : <EmptyCart />}
        </>
    )
}
