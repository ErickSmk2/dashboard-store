import { RiShoppingCartLine,RiShoppingCartFill } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";

function Products({ products }) {
  
  const {addCart, cart, removeCart} =useCart();

  const checkProductInCart = product => {
    return cart.some(Item => Item.id === product.id)
  }
  
  return (
    
    <>
      <div className="text-gray-300 text-center p-12">
        <ul className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
          {products.map((product) => {
            const isProductInCart = checkProductInCart(product)
            return(
            <li
            key={product.id}
              className="bg-[#1F1d2b] p-1 gap-4 rounded-xl flex flex-col items-center 
              mb-10 "
             
            >
              <img
                className="w-40 h-40 object-cover -mt-10 rounded-full shadow-2xl"
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong>
                <p className="text-md">{product.description}</p>
                <span className="text-gray-400">${product.price}</span>
                <p className="text-gray-600">Stock:{product.stock}</p>
              </div>
              <div className="mt-auto flex justify-center hover:text-[#ec7c6a] p-4 transition-colors">
                <button
                onClick={() =>isProductInCart 
                  ?removeCart(product)
                :addCart(product)}>
                  {
                    isProductInCart
                    ? <RiShoppingCartFill className="text-2xl"/>
                    :<RiShoppingCartLine className="text-2xl"/>
                  }
                </button>
              </div>
            </li>
)         })}
        </ul>
      </div>
    </>
  );
}

export default Products;
