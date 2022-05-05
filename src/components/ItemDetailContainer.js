import React, { useEffect, useState } from 'react'
import { ItemsData } from '../data/ItemsData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        const getItemsPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ItemsData)
            }, 2000);
        })

        getItemsPromise.then(data => {
            setItems(data)
        })
    }
    return (
        <>
            <div className="divide-y divide-slate-100" style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridGap: 10,
                gridAutoRows: "minmax(100, auto)"
            }}>
                <div style={{
                    gridColumn: "2/6",
                    gridRow: 4
                }}>
                    {items.map((item) => (
                        <ItemDetail key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer