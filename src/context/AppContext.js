import React, { createContext, useContext, useEffect, useState } from 'react'
import { getItem } from '../data/ItemsData'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItem().then((resp) => setItems(resp))

    }, [])

    return <AppContext.Provider value={{ items }}>
        { children }
    </AppContext.Provider>
}

export default AppContextProvider