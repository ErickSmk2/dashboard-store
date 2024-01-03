import {
  RiMenu2Line,
  RiImageFill,
  RiMapPin2Line,
  RiCloseLine,
  RiShoppingCart2Line
} from "react-icons/ri";
import { useCart } from "../../hooks/useCart";


function Nav({showMenu, toggleMenu, toggleOrders}) {

  const { cartCount }= useCart();
 
  return (
    <>
      
      <nav
        className="bg-[#1F1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 
        flex items-center justify-between rounded-tl-xl rounded-tr-xl "
      >
        <button className="p-2">
          <RiImageFill />
        </button>
        <button className="p-2">
          <RiMapPin2Line />
        </button>
        <button className="p-2 relative" onClick={toggleOrders}>
        <RiShoppingCart2Line className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="cart-counter bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full absolute -top-1 -right-1 text-sm">
            {cartCount}
          </span>
        )}
      </button>
        <button
          onClick={toggleMenu}
          className="text-white  p-2"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
      </nav>
    

    </>
  );
}

export default Nav;
