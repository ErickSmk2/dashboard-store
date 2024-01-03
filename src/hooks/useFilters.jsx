import { useContext } from "react";
import { FilterContext } from "../context/filters";
//Custom hook
export function useFilters () {

    const {filters, setFilter} = useContext(FilterContext);
  
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
  
    return { filterProducts, setFilter, filters}
}