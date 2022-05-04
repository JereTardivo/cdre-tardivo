import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {

    const { title, price, pictureUrl, stock } = props.item


    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={pictureUrl} alt="itemImage" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto font-medium text-slate-100">
                            {title}
                        </h1>
                        <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
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
                    <ItemCount Stock={stock} />
                    <p className="text-sm text-slate-500">
                        Envio Gratis en la Zona
                    </p>
                </div>
            </div>
        </>

    )
}

export default Item