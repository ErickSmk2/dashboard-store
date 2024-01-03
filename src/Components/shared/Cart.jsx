import { RiDeleteBin5Line,RiCloseFill } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";
import Products from "./Products";




function Cart({ showOrder, setShowOrder, product}) {

  const { cart, clearCart, removeCart }= useCart();
  return (

    <div
    className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
      showOrder ? "right-0" : "-right-full"
    }`}
    >
      {/* Orders */}
      <div className="relative pt-10 lg:pt-1 text-gray-300 p-8 h-full">
        <RiCloseFill
        onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #151416</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl"
          onClick={clearCart}
          >
            Clear cart
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[250px] md:h-[200px] lg:h-[200px] overflow-auto ">
            {/* Product */}
              {cart.map(product => (
                <div 
                key={product.id}
                className="bg-[#262837] p-4 rounded-xl mb-4">
                 <ul className="grid grid-cols-6 mb-4">
                <li key={product.id} className="col-span-6 flex items-center gap-3">
                  {/* Imagen del producto */}
                  <img src={product.thumbnail} className="w-10 h-10 object-cover" alt={product.title} />

                  {/* Descripción del producto */}
                  <div className="col-span-4 flex flex-col">
                    <h5 className="text-sm">{product.title}</h5>
                    <p className="text-xs text-gray-500">{product.price}</p>
                  </div>

                  {/* Cantidad del producto */}
                  <div>
                    <span>{product.quantity}</span>
                  </div>

                  {/* Precio del producto */}
                  <div>
                    <span>${(product.price * product.quantity).toFixed(2)}</span>
                  </div>
                </li>
                </ul>
                   {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg
                  hover:bg-[#ec7c6a] hover:text-white ">
                  <RiDeleteBin5Line
                      className="text-red-500" 
                      onClick={() => removeCart(product)}
                    />
                  </button>
                </div>
              </div>
            </div>
              ))}
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
