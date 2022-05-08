import React, { useEffect, useState } from 'react'

const ItemCount = ({ item, onAdd }) => {

    const [count, setCount] = useState(1)

    useEffect(() => {

    }, [count])

    const addHandler = () => {
        if ((item.stock) > 0 && (item.stock) > count) {
            setCount(count + 1)
        }
    }

    const subHandler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
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
                <button className="h-10 px-6 font-semibold rounded-full bg-red-600 text-white" type="submit">
                    Comprar
                </button>
                <button onClick={onAdd} className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
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