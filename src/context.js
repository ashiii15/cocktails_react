import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [searchTerm,setSearchTerm] =useState("a")
const [loading,setLoading] =useState(true)
const [cockTail,setCockTail] = useState([])
  return <AppContext.Provider value={{gitloading,setSearchTerm,cockTail}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
