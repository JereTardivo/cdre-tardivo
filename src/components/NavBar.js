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
                        <li><a href="/#">Nuestra Historia</a></li>
                        <li tabIndex="0">
                            <a href="/#">
                                Disciplinas
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href="/#">Futbol Masculino</a></li>
                                <li><a href="/#">Futbol Femenino</a></li>
                                <li><a href="/#">Hockey</a></li>
                                <li><a href="/#">Bochas</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a href="/#">
                                Shop
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href="/#">Camisetas</a></li>
                                <li><a href="/#">Conjuntos</a></li>
                                <li><a href="/#">Merchandising</a></li>
                            </ul>
                        </li>
                        <li><a href="/#">Contacto</a></li>
                    </ul>
                </div>
                <a href="/#" className="btn btn-ghost normal-case text-xl">
                    <p>Elenense</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/#">Nuestra Historia</a></li>
                    <li tabIndex="0">
                        <a href="/#">
                            Disciplinas
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a href="/#">Futbol Masculino</a></li>
                            <li><a href="/#">Futbol Femenino</a></li>
                            <li><a href="/#">Hockey</a></li>
                            <li><a href="/#">Bochas</a></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <a href="/#">
                            Shop
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a href="/#">Camisetas</a></li>
                            <li><a href="/#">Conjuntos</a></li>
                            <li><a href="/#">Merchandising</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <CartWidget />
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-rounded avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=55350" alt="Perfil" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href="/#" className="justify-between">
                                Perfil
                                <span className="badge">Nuevo</span>
                            </a>
                        </li>
                        <li><a href="/#">Configuración</a></li>
                        <li><a href="/#">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}
export default NavBar