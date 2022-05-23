import { Link } from "react-router-dom"


const Item = ({ item }) => {


    return (
        <>
            <div href="/#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={item.pictureUrl} alt="productImage" className="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-md text-white font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-white">{item.color}</p>
                <p className="mt-1 text-lg font-medium text-white">${item.price}</p>
                <div>
                    <Link to={`/item/${item.id}`} data-theme="retro" className="btn btn-xs btn-primary">
                        Ver Detalle
                    </Link>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    )
}

export default Item