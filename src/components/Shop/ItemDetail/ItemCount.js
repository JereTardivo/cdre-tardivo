import React, { useState } from 'react'
import { useCartContext } from "../../../context/CartContext"
import { useAppContext } from "../../../context/AppContext"

const ItemCount = ({ stock, onAdd, id }) => {

    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()
    const { items } = useAppContext()

    const addHandler = () => {
        if (stock > 0 && stock > count) {
            setCount(count + 1)
        }
    }

    const subHandler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClick = (id, cantidad) => {
        const findItem = items.find((item) => item.id === id)

        if (!findItem) {
            alert('Error en BD')
        }

        addToCart(findItem, cantidad)
        onAdd(count)
    }

    return (<>
        <div className="flex space-x-2 mb-2 text-sm font-medium">
            <div className="flex-auto flex space-x-2">
                <button className="btn btn-circle btn-sm bg-black" onClick={subHandler}>
                    <label>-</label>
                </button>
                <div className="displayCount" >{count}</div>
                <button className="btn btn-circle btn-sm bg-black" onClick={addHandler}>
                    <label>+</label>
                </button>
            </div>
        </div>
        <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
                <button onClick={() => { handleClick(id, count) }} className="inline-block flex-1 sm:flex-none bg-red-500 hover:bg-red-600 active:bg-indigo-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" type="button">
                    Añadir al Carrito
                </button>
            </div>
            <a href="/#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </a>
        </div>




    </>
    )
}

export default ItemCount