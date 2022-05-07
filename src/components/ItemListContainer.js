import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Item from './Item'
import { ItemsData } from '../data/ItemsData'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { categoryId } = useParams()



    useEffect(() => {
        if (categoryId === undefined) {
            getItems()
        } else {
            getItemsCategory(categoryId)
        }
    }, [categoryId])

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

    const getItemsCategory = (categoryId) => {
        const getItemsPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ItemsData.filter(i => i.category === categoryId))
            }, 2000);
        })

        getItemsPromise.then(data => {
            setItems(data)
        })
    }

    return (
        <>
            <div data-theme="retro" className="divide-y divide-slate-100 bg-secondary-content">
                <div className="bg-base-100">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <ItemList>
                            {items.map((item) => (
                                <Item key={item.id} item={item} />
                            ))}
                        </ItemList>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer




