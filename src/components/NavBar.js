import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (

        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/nuestra-historia'}>Nuestra Historia</Link></li>
                        <li tabIndex="0">
                            <label>Disciplinas</label>
                            <ul className="p-2">
                                <li><a href="/#"><Link to={'/futbol-masculino'}>Futbol Masculino</Link></a></li>
                                <li><a href="/#"><Link to={'/futbol-femenino'}>Futbol Femenino</Link></a></li>
                                <li><a href="/#"><Link to={'/hockey'}>Hockey</Link></a></li>
                                <li><a href="/#"><Link to={'/bochas'}>Bochas</Link></a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <label>Shop</label>
                            <ul className="p-2">
                                <li><a href="/#"><Link to={'/camisetas'}>Camisetas</Link></a></li>
                                <li><a href="/#"><Link to={'/conjuntos'}>Conjuntos</Link></a></li>
                                <li><a href="/#"><Link to={'/merchandaising'}>Merchandising</Link></a></li>
                            </ul>
                        </li>
                        <li><a href="/#"><Link to={'/contacto'}>Contacto</Link></a></li>
                    </ul>
                </div>
                <a href="/#" className="btn btn-ghost normal-case text-xl">
                    <label tabIndex="0" className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/0Mgrbr9/ESCUDO-PNG.png" alt="ESCUDO-PNG" border="0" />
                        </div>
                    </label>
                    <p>Elenense</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/nuestra-historia'}>Nuestra Historia</Link></li>
                    <li tabIndex="0">
                        <label>Disciplinas</label>
                        <ul className="p-2">
                            <li><a href="/#"><Link to={'/futbol-masculino'}>Futbol Masculino</Link></a></li>
                            <li><a href="/#"><Link to={'/futbol-femenino'}>Futbol Femenino</Link></a></li>
                            <li><a href="/#"><Link to={'/hockey'}>Hockey</Link></a></li>
                            <li><a href="/#"><Link to={'/bochas'}>Bochas</Link></a></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <label>Shop</label>
                        <ul className="p-2">
                            <li><a href="/#"><Link to={'/camisetas'}>Camisetas</Link></a></li>
                            <li><a href="/#"><Link to={'/conjuntos'}>Conjuntos</Link></a></li>
                            <li><a href="/#"><Link to={'/merchandaising'}>Merchandising</Link></a></li>
                        </ul>
                    </li>
                    <li><a href="/#"><Link to={'/contacto'}>Contacto</Link></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget />
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-rounded avatar">
                        <div className="w-10 rounded-full">

                            <img src="https://i.ibb.co/pLCkqhj/PROFILE.jpg" alt="PROFILE" border="0" />

                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href="/#" className="justify-between"><Link to={'/perfil'}>Perfil</Link>
                                <span className="badge">Nuevo</span>
                            </a>
                        </li>
                        <li><a href="/#"><Link to={'/configuracion'}>Configuración</Link></a></li>
                        <li><a href="/#">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}
export default NavBar