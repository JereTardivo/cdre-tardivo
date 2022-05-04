import React, { useEffect, useState } from 'react'
import Item from './Item'
import { ItemsData } from '../data/ItemsData'

const ItemList = () => {

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
            {items.map(i => <>
                <Item key={i.id} item={i} />
                <br></br>
            </>
            )}

        </>
    )
}

export default ItemList