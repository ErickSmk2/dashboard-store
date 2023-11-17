import { RiArrowDownSLine } from "react-icons/ri";
import Products from "./Products";
import { products } from "../../mocks/products.json";
import Header from "./Header";
import { useId, useState } from "react";

function Content() {

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  // filtrar por categoria y precio
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

//Mostrar el rango del precio
const [minPrice, setMinPrice] = useState(0);

const handleChangeMinPrice = e =>{
  setMinPrice(e.target.value)
  setFilter(prevState => ({
    ...prevState,
    minPrice: e.target.value
  }))
  
}
//Mostrar por categoria
const handleChangeCategory = e => {
  setFilter(prevtState => ({
    ...prevtState,
    category: e.target.value
  }))
}

  return (
    <>
      <div className="lg:col-span-6 p-1">
        <Header />
        {/*  content-title */}
        <div className="flex justify-between flex-col sm:flex-row mb-20">
    {/* filtrar por categoria */}
    <div className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-lg sm:flex">
        <label htmlFor="category" className="flex text-gray-300 text-sm">Categoria:</label>
        <div className="flex items-center gap-4 relative">
            <RiArrowDownSLine className="absolute right-3 pointer-events-none" />
            <select
                id={categoryFilterId}
                onChange={handleChangeCategory}
                className="text-gray-300 bg-[#1F1d2b] rounded-lg text-sm px-2 py-1 w-full appearance-none focus:outline-none"
            >
                <option value="all">Todas</option>
                <option value="home-decoration">Articulos para casa</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Celulares</option>
            </select>
        </div>
    </div>
    {/* filtar por precio */}
    <div className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-lg sm:mt-0">
        <label htmlFor="price" className="flex text-gray-300">Precio a partir de:</label>
        <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="1000"
            onChange={handleChangeMinPrice}
            className="w-full"
        />
        <span>${minPrice}</span>
    </div>
</div>

        <div>
          {/* Content-card */}
          <Products products={filteredProducts} />
        </div>
        {/* list */}
      </div>
    </>
  );
}

export default Content;
