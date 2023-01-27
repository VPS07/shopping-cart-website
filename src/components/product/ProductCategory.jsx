import React from 'react'

export default function Product(props) {
    return (
        <div>
            <div className='flex flex-col items-center hover:text-blue-600 hover:cursor-pointer'>
                <img src={props.imgUrl} alt="img" className='w-[4.5rem] mb-1' />
                <p className='text-sm font-bold  '>{props.category}</p>
            </div>
        </div>
    )
}
