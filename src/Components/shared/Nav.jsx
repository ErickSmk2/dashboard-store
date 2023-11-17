import {
  RiMenu2Line,
  RiImageFill,
  RiMapPin2Line,
  RiCloseLine,
  RiShoppingCart2Line
} from "react-icons/ri";


function Nav({showMenu, toggleMenu, toggleOrders}) {
 
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
        <button className="p-2"
        onClick={toggleOrders}>
          <RiShoppingCart2Line />
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
