import { NavLink } from "react-router-dom"

const Item = ({ item }) => {

    return (
        <>

            <article className="flex items-start space-x-6 p-6" >
                <img src={item.pictureUrl} alt="" width="110" height="128" className="flex-none rounded-md bg-slate-100" />
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20" style={{color: "white"}}>{item.title}</h2>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                            <button className="btn btn-primary"><NavLink to={`/category/${item.id}`}>Ver Detalle</NavLink></button>
                        </div>
                        <div>
                            <dt className="sr-only">Precio</dt>
                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">$ {item.price}</dd>
                        </div>
                    </dl>
                </div>
            </article>
        </>

    )
}

export default Item