import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({ greetings }) => {

    const [category, setCategory] = useState()
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()

        if (categoryId === undefined) {
            const itemsCollection = collection(db, "items")
            getDocs(itemsCollection).then((snapshot) => {
                setCategory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
        } else {

            const q = query(collection(db, "items"), where("categoryId", "==", parseInt(categoryId, 10)))
            getDocs(q).then((snapshot) => {
                setCategory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
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
            <div className="bg-auto" style={{ backgroundImage: `url(https://i.ibb.co/c1xgRLw/LADRILLOSNEGROS.png)` }}>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <ItemList category={category} />
                </div>
            </div>

        </>
    )
}

export default ItemListContainer




