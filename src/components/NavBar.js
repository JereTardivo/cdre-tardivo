import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useCartContext } from '../context/CartContext'
import CartWidget from './Shop/Cart/CartWidget'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

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
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="relative bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-28">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Abrir Menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex justify-start">
                                    <Link to='/' href="/#">
                                        <img src="https://i.ibb.co/XsnxtkY/Dise-o-sin-t-tulo.png" alt="Dise-o-sin-t-tulo" border="0" />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button >
                                                        <span className="sr-only">Abrir Menu Shop</span>
                                                        <a href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                            Shop
                                                        </a>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={`/category/3`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Wv2rJBf/remera-Icono-Nav-Bar.png" alt="remera-Icono-Nav-Bar" border="0" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">Remeras</p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={`/category/1`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/N3M3q8w/camisa-Icono-Nav-Bar.png" alt="camisa-Icono-Nav-Bar" border="0" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">Camisas</p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={`/category/4`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/PzCyrSh/sweater-Icono-Nav-Bar.png" alt="sweater-Icono-Nav-Bar" border="0" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">Sweaters</p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={`/category/2`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                                    <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Q68Qjv2/pantalon-Icono-Nav-Bar.png" alt="pantalon-Icono-Nav-Bar" border="0" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">Pantalones</p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button >
                                                        <span className="sr-only">Abrir Menu Shop</span>
                                                        <Link to={`/us`} href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                            Nosotros
                                                        </Link>
                                                    </Menu.Button>
                                                </div>
                                            </Menu>
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button >
                                                        <span className="sr-only">Abrir Menu Shop</span>
                                                        <Link to={`/contact`} href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                            Contacto
                                                        </Link>
                                                    </Menu.Button>
                                                </div>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {cantidad !== 0 ?
                                        <CartWidget />
                                        : <></>}

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="rounded-full ">
                                                <span className="sr-only">Abrir Menu de Usuario</span>
                                                <div className='avatar'>
                                                    <div className="w-10 rounded-full">
                                                        <img src="https://i.ibb.co/pLCkqhj/PROFILE.jpg" alt="PROFILE" border="0" />
                                                    </div>
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Perfil
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Cerrar Sesion
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button>
                                            <span className="sr-only">Abrir Menu Shop</span>
                                            <a href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                Shop
                                            </a>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to={`/category/3`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                        <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Wv2rJBf/remera-Icono-Nav-Bar.png" alt="remera-Icono-Nav-Bar" border="0" />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">Remeras</p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to={`/category/1`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                        <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/N3M3q8w/camisa-Icono-Nav-Bar.png" alt="camisa-Icono-Nav-Bar" border="0" />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">Camisas</p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to={`/category/4`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                        <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/PzCyrSh/sweater-Icono-Nav-Bar.png" alt="sweater-Icono-Nav-Bar" border="0" />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">Sweaters</p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to={`/category/2`} href="/#" className="p-5 flex items-start rounded-lg hover:bg-gray-50">
                                                        <img className="flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" src="https://i.ibb.co/Q68Qjv2/pantalon-Icono-Nav-Bar.png" alt="pantalon-Icono-Nav-Bar" border="0" />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">Pantalones</p>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button>
                                            <span className="sr-only">Abrir Menu Shop</span>
                                            <Link to={`/us`} href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                Nosotros
                                            </Link>
                                        </Menu.Button>
                                    </div>
                                </Menu>
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button>
                                            <span className="sr-only">Abrir Menu Shop</span>
                                            <Link to={`/contact`} href="/#" className={classNames('text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}                                                        >
                                                Contacto
                                            </Link>
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </Disclosure.Panel>
                    </div>
                </>
            )
            }
        </Disclosure >
    )
}
