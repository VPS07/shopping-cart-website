import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className='pt-24'>
            <div className='mx-44 border-2 p-6 rounded '>
                <div>My Cart</div>
                <div className='flex flex-col items-center '>
                    <img src={'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'} alt="img" className='w-52 mb-6' />
                    <p className='text-lg mb-2'>Your Cart is empty!</p>
                    <p className='text-sm text-gray-700 mb-7'>Add item to it now</p>
                    <Link to='/' className='text-white bg-blue-500 hover:bg-blue-600 p-[6px] rounded mb-9'>Shop now</Link>
                </div>
            </div>
        </div>
    )
}
