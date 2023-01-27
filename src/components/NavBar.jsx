import { BsShop } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchData } from "../features/productDataSlice";

export default function NavBar() {
    const itemsInCart = useSelector(state => state.cartDataReducer.productInCart)
    const [txtInput, setTxtInput] = useState('');
    const dispatch = useDispatch();

    function onChangeHandler(e) {
        let textValue = e.target.value.toLowerCase();
        setTxtInput(textValue);
        dispatch(searchData(textValue));
    }

    return (
        <div className="bg-blue-600 w-[100%] h-[50px] pt-2 fixed">
            <div className="flex items-center">
                <Link to="/" className="flex text-white space-x-2 ml-16">
                    <BsShop className="text-3xl" />
                    <h3 className="text-xl mt-1 font-bold">Fliss Store</h3>
                </Link>
                <div className="relative ml-7">
                    <input type="text" value={txtInput} placeholder="Search for products" className="outline-none py-1 px-3 rounded-sm w-96 lg:w-[500px] focus:ring" onChange={onChangeHandler} />
                    <BiSearch className="absolute left-[22rem] lg:left-[470px] bottom-[0.35rem] text-blue-600 text-xl" />
                </div>
                <div className="text-white flex ml-24 cursor-pointer lg:ml-[700px] active:bg-blue-700 active:p-[0.2rem] active:rounded">
                    <Link to="/cart" className="flex">
                        <MdAddShoppingCart className="text-2xl" />
                        <p className="text-[0.6rem] mt-2 bg-red-500 rounded-md px-1 py-[0.1] text-center font-bold -ml-1">{itemsInCart.length}</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}
