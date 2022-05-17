
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"


const CartWidget = () => {

    const { cart } = useCartContext()

    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        let t = 0, c = 0

        for (let i = 0; i < cart.length; i++) {
            t = t + (cart[i].price * cart[i].quantity)
            c = c + cart[i].quantity
        }

        setTotal(t)
        setCantidad(c)
    }, [cart])

    return (
        <>
            <div data-theme="retro" className="dropdown dropdown-end bg-white">
                 <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {cantidad !== 0 ?
                         <span className="badge badge-sm indicator-item badge-primary">{cantidad}</span>
                         : <></>}
                    </div>
                </label> 

                <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-white shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">{cantidad} Items</span>
                        <span className="text-success font-bold">Subtotal: ${total}</span>
                        <div>

                        </div>
                        <div className="card-actions">
                            <Link to='/cart' className="btn btn-secondary btn-block">Ver Carrito</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartWidget