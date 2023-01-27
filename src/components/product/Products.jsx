import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchProductData } from '../../features/productDataSlice'
import Cards from '../product_card/Cards'
import ElectronicsProduct from './ElectronicsProduct'
import FashionProduct from './FashionProduct'
import JeweleryProducts from './JeweleryProducts'
import Productbar from './Productbar'

export default function Products() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.productDataReducer);
    const productData = data.filterData.length ? data.filterData : data.products;

    useEffect(() => {
        dispatch(fetchProductData());
    }, [])


    return (
        <>
            <Productbar />
            <Routes>
                <Route path='/' element={<Cards products={productData} />} />
                <Route path='/electronics' element={<ElectronicsProduct products={productData} />} />
                <Route path='/jewelery' element={<JeweleryProducts products={productData} />} />
                <Route path='/fashion' element={<FashionProduct products={productData} />} />
            </Routes>
        </>
    )
}
