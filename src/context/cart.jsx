import { createContext, useState } from "react";

//Crear contexto
export const CartContext = createContext();

//Crear provider
export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addCart = (product) => {
        const productInCart = cart.findIndex((item) => item.id === product.id);
      
        if (productInCart >= 0) {
          const updatedCart = [...cart];
          updatedCart[productInCart].quantity += 1;
          setCart(updatedCart);
          setCartCount((prevCount) => prevCount + 1); // Aumentar el contador si se actualiza la cantidad
        } else {
          setCart((prevState) => [
            ...prevState,
            {
              ...product,
              quantity: 1,
            },
          ]);
          setCartCount((prevCount) => prevCount + 1); // Aumentar el contador al agregar un nuevo producto al carrito
        }
      };
      

    const removeCart = product => {
        setCart(prevState =>
            prevState.filter(item => item.id !== product.id)
        );
        setCartCount((prevCount) => prevCount - 1);
    };
    
    
    
    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            clearCart,
            removeCart,
            setCartCount,
            cartCount
        }}>
            { children }
        </CartContext.Provider>
    )
}