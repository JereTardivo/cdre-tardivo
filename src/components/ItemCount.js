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

    </>
    )
}

export default ItemCount