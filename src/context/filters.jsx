import { createContext, useState } from "react";

//Crear el contexto
export const FilterContext = createContext();

//Proveer el contexto con un provider
export function FiltersProvider ({ children }){

    const [filters, setFilter] = useState(
        {
            category: "all",
              minPrice: 0,
        }
    );

    return(
        <FilterContext.Provider value={{
            filters,
            setFilter
        }}>
            { children }
        </FilterContext.Provider>
    )
}