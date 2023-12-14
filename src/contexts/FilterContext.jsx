import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [articleSort, setArticleSort] = useState({sort_by: 'created_at', order: 'desc'})
    const [commentSort, setCommentSort] = useState({sort_by: 'created_at', order: 'desc'})

    return (
        <FilterContext.Provider value={{ artSort: [articleSort, setArticleSort], comSort: [commentSort, setCommentSort]}}>
            {children}
        </FilterContext.Provider>
    )
}
