import React from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from '../../../context/CartContext'

const Cart = ({ item }) => {

    const { id, title, pictureUrl, price, brand, color, quantity } = item
    const { cart, deleteFromCart } = useCartContext()

    const handleClick = (id) => {
        const findItem = cart.find((it) => it.id === id)

        if (!findItem) {
            alert('Error en BD')
        }

        deleteFromCart(findItem)
    }


    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <button onClick={() => { handleClick(id) }} className="btn btn-circle btn-error btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{title}</div>
                                <div className="text-sm opacity-50">{brand}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Color: {color}
                        <br />
                        <span className="badge badge-ghost badge-sm">Cantidad: {quantity}</span>
                    </td>
                    <td>$ {price}</td>
                    <td>$ {price * quantity}</td>
                    <td>
                        <Link to={`/item/${id}`} className="btn btn-info btn-sm">Detalle</Link>
                    </td>


                </tr>
            </tbody>
        </>
    )
}

export default Cart