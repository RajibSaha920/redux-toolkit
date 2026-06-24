import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem,clearCart } from "./slice"
import { useNavigate } from "react-router-dom"

export const CartList = () => {
    const cartSelector = useSelector((state) => state.cart.items)
    const [cartItems, setcartItems] = useState(cartSelector)
    const navigate = useNavigate()

    useEffect(()=>{
        setcartItems(cartSelector)
    },[cartSelector])

    const dispatch = useDispatch()
    const manageQuantity = (id, q) => {

        let quantity = parseInt(q) > 1 ? parseInt(q) : 1
        const TempCartIem = cartSelector.map((item) => {
            return item.id == id ? { ...item, quantity } : item
        })
        setcartItems(TempCartIem)
    }

    const ManageOrder =()=>{
        localStorage.clear()
        dispatch(clearCart())
        alert("Do you want to place Order ?")
        navigate("/")
    }

    return (
        <>
            <div className="w-[90%] mx-auto  bg-white rounded-xl shadow-md p-5 mb-4">
                {
                    cartItems.length && cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
                            <div className="flex items-center gap-4 w-50%">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        {item.category}
                                    </p>

                                    <p className="text-green-600 font-bold">
                                        ${(item.quantity ? item.quantity * item.price : item.price).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center bg-gray-100 rounded-lg p-2">
                                <input onChange={(e) => { manageQuantity(item.id, e.target.value) }}
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                    className="w-16 bg-transparent text-center font-semibold outline-none"
                                />
                            </div>

                            <button onClick={()=>{dispatch(removeItem(item))}}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>


                        </div>

                    ))
                }

            </div>
            <div className=" w-[90%] mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
                <div className="flex justify-between text-lg font-semibold">
                    <div>Total</div>
                    <div>
                        {cartItems.reduce((sum, item) => item.quantity ? sum + item.quantity * item.price : sum + item.price, 0)}
                    </div>
                </div>

                <button onClick={()=>{ManageOrder()}} className="w-full mt-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                    Checkout
                </button>
            </div>
        </>
    )
}