import  Cart  from "./Cart"
import { useDispatch } from "react-redux"
import { clearCart } from "./redux/slice";
import { Link } from "react-router-dom";

export const Header =()=>{
    const dispatch = useDispatch()

   return (
    <>
    <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">

            <div className="flex">
                <h1 className="text-2xl font-bold text-blue-600">
                MyStore
                </h1>
                <button className=" px-4 py-2 items-center justify-between" onClick={()=>{dispatch(clearCart(0))}}>Clear Cart</button>
            </div>

            <nav className=" md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link to="/abouts" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>

            <Cart/>

            </div>
        </div>
    </header>
    </>
   )

}