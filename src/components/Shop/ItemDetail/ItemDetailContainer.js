import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Wait from '../../Wait'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const db = getFirestore()

        if (id === undefined) {
            const itemsCollection = collection(db, "items")
            getDocs(itemsCollection).then((snapshot) => {
                setItem(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
        } else {
            const itemsCollection = collection(db, "items")
            getDocs(itemsCollection).then((snapshot) => {
                const it = snapshot.docs.filter(p => p.id === id)
                setItem(it.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
        }
    }, [id])

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12" >
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {item ? (item && item.map((item) => (
                            <ItemDetail key={item.id} item={item} />
                        ))) : <Wait />
                        }
                    </div>
                </div>
            </div>

        </>

    )
}

export default ItemDetailContainer