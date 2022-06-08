import { useCartContext } from '../../../context/CartContext'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const CartList = () => {

  const { cart, deleteCart, total } = useCartContext()

  return (
    <>
      {cart.length === 0 ?
        <>
          <div className='hero min-h-screen'>
            <div className='hero-overlay bg-opacity-60'></div>
            <div className="hero-content text-center text-neutral-content">
              <div className='max-w-md'>
                <img src='https://i.ibb.co/ZYk3VNZ/TU-CARRITO.png' alt="carrito" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
            </div>
          </div>
        </>
        :
        <>
          <div className='flex justify-center content-center '>
            <div className="flex flex-col max-w-3xl p-6 space-y-4  sm:p-10 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="text-xl font-semibold">Detalle de su Orden</h2>
              <ul className="flex flex-col divide-y divide-gray-700">

                {cart.map((item) => (
                  <Cart key={item.id} item={item} />
                ))}

              </ul>
              <div className="space-y-1 text-right">
                <p>Total:
                  <span className="font-semibold">$ {total()}</span>
                </p>
                <p className="text-sm">Incluye el costo de envio</p>
              </div>
              <div className="flex justify-end space-x-4">
                <Link to="/" type="button" className="px-6 py-2 border rounded-md">
                  <span className="sr-only sm:not-sr-only">Volver al Shop</span>
                </Link>
                <button onClick={deleteCart} type="button" className="btn btn-error px-6 py-2 border rounded-md">
                  <span className="sr-only sm:not-sr-only">Vaciar Carrito</span>
                </button>
                <Link to="/sale" type="button" className="btn btn-success px-6 py-2 border rounded-md ">
                  <span className="sr-only sm:not-sr-only">Finalizar Orden</span>
                </Link>
              </div>
              <div className="flex justify-end space-x-4">

              </div>
            </div>
          </div>
        </>}

    </>
  )
}

export default CartList