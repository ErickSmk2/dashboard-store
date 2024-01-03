import Cart from "./Components/shared/Cart";
import Content from "./Components/shared/Content";
import Nav from "./Components/shared/Nav";
import { useState } from "react";
import Sidebar from "./Components/shared/Sidebar";
import { CartProvider } from "./context/cart";
import { Footer } from "./Components/shared/Footer";

function App() {
  // Mostrar menu y carrito de compras
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <CartProvider>
         <div className="bg-[#262837] w-full min-h-screen">
      <Nav />
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-9">
        <Content />
        <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
        <Sidebar showMenu={showMenu} />
        <Nav toggleMenu={toggleMenu} toggleOrders={toggleOrders} />
      </main>
      <Footer/>
    </div>
    </CartProvider>
  );
}

export default App;
