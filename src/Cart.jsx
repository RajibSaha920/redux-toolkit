import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartList } from "./redux/CartList";

 const Cart =()=>{
    const cartSelector = useSelector((state)=>state.cart.items )
    console.log(cartSelector)
    return(
        <>
      <div className="relative cursor-pointer">
        <Link to="/cart" element={CartList} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 4h11M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>

        <span
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
        >
          {cartSelector.length ? cartSelector.length : 0}
        </span>
        </Link>
      </div>
        </>
    )
}

export default Cart;