
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    const {id, title, pictureUrl, price, stock } = item

    const [onCart, setOnCart] = useState(false)

    const onAdd = (count) => {
        setOnCart(true)
        console.log(count)
    }

    return (
        <>
            <div className="card card-side bg-white shadow-xl">
                <figure>
                    <img src={pictureUrl} alt="itemImage" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto font-medium text-slate-100" style={{ color: "black", fontSize: 20 }}>
                            <strong>{title}</strong>
                        </h1>
                        <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-red-600">
                            $ {price}
                        </div>
                        <div className="text-sm font-medium text-slate-400">
                            {stock > 0 ? 'En Stock' : 'Sin Stock'}
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm font-bold">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" defaultChecked />
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-red-400 peer-checked:bg-red-600 peer-checked:text-white">
                                    XS
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="s" />
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-red-400 peer-checked:bg-red-600 peer-checked:text-white">
                                    S
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="m" />
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-red-400 peer-checked:bg-red-600 peer-checked:text-white">
                                    M
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="l" />
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-red-400 peer-checked:bg-red-600 peer-checked:text-white">
                                    L
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xl" />
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-red-400 peer-checked:bg-red-600 peer-checked:text-white">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>

                    {onCart ?
                        <>
                            <p className={"text-green-600 font-bold"}>¡Producto añadido al Carrito!</p>
                            <div className="flex-auto flex space-x-4">
                                <Link to="/cart" className="h-10 px-6 font-semibold rounded-full bg-red-600 text-white" type="submit">
                                    Terminar Compra
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <label className="text-xs"> {stock > 1 ? '(' + item.stock + ' disponibles)' : '¡Última disponible!'}</label>
                            <ItemCount onAdd={onAdd} stock={stock} id={id} />
                        </>}
                    <p className="text-sm text-slate-500">
                        Envio Gratis en la Zona
                    </p>
                </div>
            </div>
            <br></br>

        </>
    )
}

export default ItemDetail