import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from './redux/productSlice';

export const Product = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

  const products = useSelector((state) => state.products.items);

  const cartSelector = useSelector((state)=>state.cart.items )
  console.log(cartSelector)
  
  

return (
  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (

          

        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-bold">{product.title}</h2>

            <p className="text-sm text-gray-500 mt-1">
              {product.brand}
            </p>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {product.description}
            </p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-xl font-bold text-green-600">
                ₹{product.price}
              </span>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.availabilityStatus}
              </span>
            </div>

            {
            cartSelector.find((cartItem) => cartItem.id===product.id) ?
            <button
              onClick={() => dispatch(removeItem(product))}
               className="w-full mt-4 bg-red-600 text-white py-2  rounded hover:bg-blue-700"
            >
              Remove from Cart
            </button>
            :
             <button
              onClick={() => dispatch(addItem(product))}
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add To Cart
            </button>
            
            }

           
          </div>
        </div>
      ))}
    </div>
  </div>
);
}