import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/hF9H9N2/camiste-Titular.jpg" alt="camiste-Titular" /></figure>
                        <div className="card-body">
                            <form className="flex-auto p-6">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto font-medium text-slate-900">
                                        Remera Titular {props.itemDescription}
                                    </h1>
                                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                                        $3000 {props.price}
                                    </div>
                                    <div className="text-sm font-medium text-slate-400">
                                        En stock
                                    </div>
                                </div>
                                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="space-x-2 flex text-sm font-bold">
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="xs" defaultChecked />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                XS
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="s" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                S
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="m" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                M
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="l" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                L
                                            </div>
                                        </label>
                                        <label>
                                            <input className="sr-only peer" name="size" type="radio" value="xl" />
                                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                XL
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <ItemCount Stock={10} />
                                <div className="flex space-x-4 mb-5 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                                            Comprar
                                        </button>
                                        <button className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                                            Añadir al Carrito
                                        </button>
                                    </div>
                                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-500">
                                    Envio Gratis en la Zona
                                </p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>


        </>
    )
}

export default ItemListContainer




