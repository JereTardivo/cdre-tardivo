
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    const { id, title, pictureUrl, price, stock } = item

    const [onCart, setOnCart] = useState(false)

    const onAdd = (count) => {
        setOnCart(true)
    }

    return (
        <>
            <div class="space-y-4">
                <div class="bg-gray-100 rounded-lg overflow-hidden relative">
                    <img src={pictureUrl} loading="lazy" alt="imagen" class="w-full h-full object-cover object-center" />
                </div>
            </div>
            <div class="md:py-8">
                <div className="text-sm font-medium text-slate-300">
                    {stock > 0 ? 'En Stock' : 'Sin Stock'}
                </div>
                <div class="mb-2 md:mb-3">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{title}</h2>
                </div>

                <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Talle</span>
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
                <div class="mb-4">
                    <div class="flex items-end gap-2">
                        <span class="text-gray-800 text-xl md:text-2xl font-bold">$ {price}</span> <span class="text-gray-500 text-sm">(IVA incluido)</span>
                    </div>
                </div>
                <div class="flex items-center text-gray-500 gap-2 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <span class="text-sm">Envios Gratis a todo el Pais</span>
                </div>

                {onCart ?
                    <>
                        <div class="flex gap-2.5">
                            <Link to="/cart" href="/#" class="inline-block flex-1 sm:flex-none bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Terminar Compra</Link>

                            <a href="/#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>
                        </div> </>
                    :
                    <>
                        <label className="text-xs"> {stock > 1 ? '(' + item.stock + ' disponibles)' : '¡Última disponible!'}</label>
                        <ItemCount onAdd={onAdd} stock={stock} id={id} />
                    </>}
            </div>

        </>
    )
}

export default ItemDetail