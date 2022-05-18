import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
                    {item && item.map((item) => (
                        <ItemDetail key={item.id} item={item} />
                    ))}


                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer