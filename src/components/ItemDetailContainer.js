import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemsData } from '../data/ItemsData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem(itemId)
    }, [itemId])

    const getItem = (itemId) => {
        const getItemsPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ItemsData.find(i => i.id === itemId))
            }, 2000);
        })

        getItemsPromise.then(data => {
            setItem(data)
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
                <div className="bg-base-100" style={{
                    gridColumn: "2/6",
                    gridRow: 4
                }}>
                    <ItemDetail key={item.id} item={item} />

                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer