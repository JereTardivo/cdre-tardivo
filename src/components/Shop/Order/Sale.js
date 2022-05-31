import { doc, updateDoc, increment, getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";

const Sale = () => {
    const { cart, total, deleteCart } = useCartContext();
    const [saleId, setSaleId] = useState(undefined);

    const [sale, setSale] = useState({
        buyer: {
            name: "",
            phone: "",
            email: "",
        },
        items: cart.map((i) => ({
            id: i.id,
            title: i.title,
            price: i.price,
            quantity: i.quantity,
        })),
        date: new Date(),
        total: total(),
    });

    const handleNameBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.name = e.target.value;
        setSale(newSale);
    };

    const handlePhoneBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.phone = e.target.value;
        setSale(newSale);
    };

    const handleEmailBlur = (e) => {
        const newSale = { ...sale };
        newSale.buyer.email = e.target.value;
        setSale(newSale);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const db = getFirestore();

        sale.items.forEach((item) => {
            const docRef = doc(db, 'items', item.id)
            updateDoc(docRef, {
                stock: increment(-item.quantity)
            })
        });

        const sales = collection(db, "orders");
        const response = await addDoc(sales, sale);
        setSaleId(response.id);
        deleteCart();
    };

    return (
        <>
            {cart && cart.length > 0 ? (
                <div className="card container mt-4" style={{ maxWidth: "500px" }}>
                    <div className="card-body">
                        <h5 className="card-title text-white font-medium">
                            Ingrese los siguientes datos para confirmar la compra
                        </h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label text-white font-medium px-2">Nombre: </label>
                                <input
                                    type="text"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Escribe Aqui tu Nombre"
                                    id="inptNombre"
                                    onBlur={handleNameBlur}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white font-medium px-2">Telefono: </label>
                                <input
                                    type="text"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Escribe Aqui tu Telefono"
                                    id="inptTelefono"
                                    onBlur={handlePhoneBlur}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white font-medium px-2">Email: </label>
                                <input
                                    type="email"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Escribe Aqui tu Email"
                                    id="inptEmail"
                                    onBlur={handleEmailBlur}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-warning">
                                Confirmar
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="card container mt-4">
                    <div className="card-body">
                        <>
                            {saleId ? (
                                <div className="alert alert-success" role="alert">
                                    Su compra se ha registrado correctamente bajo el ID: {saleId}
                                </div>
                            ) : (
                                <div className='hero min-h-screen'>
                                    <div className='hero-overlay bg-opacity-60'></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className='max-w-md'>
                                            <img src='https://i.ibb.co/ZYk3VNZ/TU-CARRITO.png' alt="carrito" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                        <Link className="card-link" to="/">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sale;