import React, { useEffect, useState } from 'react'

const ItemCount = (props) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
    }, [count])

    const addHandler = () => {
        if ((props.Stock - 1) > 0 && (props.Stock - 1) >= count) {
            setCount(count + 1)
        }
    }

    const subHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (<>
        <div className="flex space-x-2 mb-2 text-sm font-medium">
            <div className="flex-auto flex space-x-2">
                <button className="btn btn-circle btn-sm btn-active" onClick={subHandler}>-</button>
                <div className="displayCount" >{count}</div>
                <button className="btn btn-circle btn-sm btn-active" onClick={addHandler}>+</button>
            </div>
        </div>
        <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                    Comprar
                </button>
                <button className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                    Añadir al Carrito
                </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
            </button>
        </div>


    </>
    )
}

export default ItemCount