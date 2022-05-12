import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../data/ItemsData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        if (id === undefined) {
            getItem().then((resp) => setItem(resp))
        } else {
            getItem().then((resp) => setItem(resp[id]))
        }

    }, [id])

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
                    <ItemDetail item={item} />

                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer