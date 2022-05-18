import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = collection(db, "items")
            getDocs(itemsCollection).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })

    }, [])

    return <AppContext.Provider value={{ items }}>
        { children }
    </AppContext.Provider>
}

export default AppContextProvider