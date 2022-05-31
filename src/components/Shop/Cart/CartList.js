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
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Articulos</th>
                  <th>Datos Articulo</th>
                  <th>Precio Unitario</th>
                  <th>Precio Total</th>
                  <th></th>
                </tr>
              </thead>

              {cart.map((item) => (
                <Cart key={item.id} item={item} />
              ))}

              <tfoot>
                <tr>
                  <th><button onClick={deleteCart} className="btn btn-warning">Vaciar Carrito</button></th>
                  <th></th>
                  <th></th>
                  <td><div className='text-base' >Total</div></td>
                  <td><div className='text-base'>$ {total()}</div></td>
                  <th><Link to="/sale" className="btn btn-success btn-md">Finalizar Compra</Link></th>
                </tr>
              </tfoot>

            </table>
            
          </div>
        </>
      }

    </>
  )
}

export default CartList