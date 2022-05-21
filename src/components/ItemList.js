import Item from './Item'

const ItemList = ({ category }) => {
    return (
        <>

           
           <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {category && category.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>


        </>
    )
}

export default ItemList