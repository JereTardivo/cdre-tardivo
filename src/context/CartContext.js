import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.find(item => item.id === id)
    const addToCart = (item, cantidad) => {
        const newCart = [...cart]
        const itemIsInCart = isInCart(item.id)
        if (itemIsInCart) {
            newCart[newCart.findIndex((it) => it.id === itemIsInCart.id)].quantity += cantidad
            setCart(newCart)
            return
        }

        item.quantity = cantidad
        setCart([...newCart, item])
    }

    const deleteFromCart = (item) => {
        const newCart = [...cart]
        const itemIsInCart = isInCart(item.id)
        if (!itemIsInCart) {
            return
        }

        const deleteItem = newCart.filter((it) => it.id !== item.id)

        setCart(deleteItem)
    }

    const deleteCart = () => setCart([])

    console.log(cart)

    return <CartContext.Provider value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider