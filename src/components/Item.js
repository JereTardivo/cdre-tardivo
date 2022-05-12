import { Link } from "react-router-dom"


const Item = ({ item }) => {

    return (
        <>
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={item.pictureUrl} alt="productImage" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-400">{item.color}</p>
                    </div>
                    <p className="text-xl font-medium text-red-500">$ {item.price}</p>
                </div>
                <br></br>
                <Link to={`/item/${item.id}`} data-theme="retro" className="btn btn-xs btn-primary">Ver Detalle</Link>

            </div>




        </>

    )
}

export default Item