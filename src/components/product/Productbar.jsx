import React from 'react'
import { Link } from 'react-router-dom';
import ProductCategory from './ProductCategory';

function Productbar() {
    return (
        <div className='flex pl-20 pt-14 border-b-2 space-x-7 pb-2'>
            <Link to='/'>
                <ProductCategory imgUrl={"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"} category={"All products"} /></Link>

            <Link to='/electronics'>
                <ProductCategory imgUrl={"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"} category={"Electronics"} /></Link>

            <Link to='/jewelery'>
                <ProductCategory imgUrl={"https://rukminim1.flixcart.com/image/580/696/kkh6zrk0/jewellery-set/o/w/z/gt-ns-862-matushri-art-original-imafzt9teacakjyn.jpeg?q=50"} category={"Jewellery"} />
            </Link>

            <Link to='/fashion'>
                <ProductCategory imgUrl={"https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"} category={"Fashion"} />
            </Link>

        </div>
    )
}

export default Productbar;