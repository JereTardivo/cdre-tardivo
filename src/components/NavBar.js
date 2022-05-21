import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import CartWidget from './CartWidget'

const NavBar = () => {

    const { cart } = useCartContext()
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        let c = 0

        for (let i = 0; i < cart.length; i++) {
            c = c + cart[i].quantity
        }
        setCantidad(c)
    }, [cart])

    return (
        <>
            <div className="relative bg-white" >
                <div className="max-w-7xl mx-auto px- sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 md:justify-start md:space-x-10">
                        <div className="justify-start lg:w-0 lg:flex-1">
                            <Link to='/' href="/#">
                                <img src="https://i.ibb.co/XsnxtkY/Dise-o-sin-t-tulo.png" alt="Dise-o-sin-t-tulo" border="0" />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500" aria-expanded="false">
                                <span className="sr-only">Abrir Menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <div className="relative">
                                <ul className="menu menu-horizontal p-0">
                                    <li tabIndex="0">
                                        <Link to='/' type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" aria-expanded="false">Shop</Link>
                                        <ul className="p-2 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true">
                                            <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <ul className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    <li>
                                                        <Link to={`/category/3`} href="/#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Wv2rJBf/remera-Icono-Nav-Bar.png" alt="remera-Icono-Nav-Bar" border="0" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">Remeras</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/category/1`} href="/#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/N3M3q8w/camisa-Icono-Nav-Bar.png" alt="camisa-Icono-Nav-Bar" border="0" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">Camisas</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/category/4`} href="/#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/PzCyrSh/sweater-Icono-Nav-Bar.png" alt="sweater-Icono-Nav-Bar" border="0" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">Sweaters</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/category/2`} href="/#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Q68Qjv2/pantalon-Icono-Nav-Bar.png" alt="pantalon-Icono-Nav-Bar" border="0" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">Pantalones</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li></li>
                                    <li tabIndex="0">
                                        <a href="/#" data-theme="retro" className="bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> Nosotros </a>
                                    </li>
                                    <li></li>
                                    <li tabIndex="0">
                                        <a href="/#" data-theme="retro" className="bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> Contacto </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            {cantidad !== 0 ?
                                <CartWidget />
                                : <></>}
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-rounded avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/pLCkqhj/PROFILE.jpg" alt="PROFILE" border="0" />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href="/#" className="justify-between">Perfil
                                            <span className="badge">Nuevo</span>
                                        </a>
                                    </li>
                                    <li><a href="/#">Configuración</a></li>
                                    <li><a href="/#">Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://i.ibb.co/XsnxtkY/Dise-o-sin-t-tulo.png" alt="Dise-o-sin-t-tulo" border="0" />
                                </div>
                                <div className="-mr-2">
                                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                        <span className="sr-only">Cerrar Menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a href="/#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <span className="ml-3 text-base font-medium text-gray-900"> Shop </span>
                                    </a>
                                    <a href="/#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <span className="ml-3 text-base font-medium text-gray-900"> Nosotros </span>
                                    </a>
                                    <a href="/#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                        <span className="ml-3 text-base font-medium text-gray-900"> Conacto </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar