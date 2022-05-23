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

        if(!findItem){
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
                <button onClick={() => { handleClick(id, count) }} className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                    Añadir al Carrito
                </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-red-600 bg-red-50" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button>
        </div>




    </>
    )
}

export default ItemCount