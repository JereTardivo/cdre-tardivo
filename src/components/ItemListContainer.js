import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../data/ItemsData'
import ItemList from './ItemList'

const ItemListContainer = ({ greetings }) => {

    const [category, setCategory] = useState()
    const { categoryId } = useParams()



    useEffect(() => {
        if (categoryId === undefined) {
            getItem().then((resp) => setCategory(resp))
        } else {
            getItem().then((resp) =>
                setCategory(resp.filter((item) => item.category === categoryId)))
        }
    }, [categoryId])



    return (
        <>
            <div className='hero min-h-screen' style={{ backgroundImage: `url(https://i.ibb.co/gD3PB62/Fondo.png)` }}>
                <div className='hero-overlay bg-opacity-60'></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='max-w-md'>
                        <h1 className="mb-5 text-5xl font-bold">{greetings}</h1>
                        <p className='mb-5'>Tienda Online de Ropa Clasica</p>
                    </div>
                </div>
            </div>
            <div className="divide-y divide-slate-100 bg-secondary-content">
                <div className="bg-base-100">

                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <ItemList category={category} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemListContainer




