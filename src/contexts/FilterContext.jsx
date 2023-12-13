import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [sortOptions, setSortOptions] = useState([])

    return (
        <FilterContext.Provider value={{sortOptions, setSortOptions}}>
            {children}
        </FilterContext.Provider>
    )
}
