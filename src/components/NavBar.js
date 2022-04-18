import CartWidget from "./CartWidget"

const NavBar = () => {
    return (

        <div class="navbar bg-base-100">

            <div class="flex-1">
                <a href="/#" class="btn btn-ghost normal-case text-xl">
                    <p>Elenense</p>
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a href="/#">Nuestra Historia</a></li>
                    <li><a href="/#">Disciplinas</a></li>
                    <li tabindex="0">
                        <a href="/#">
                            Shop
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a href="/#">Camisetas</a></li>
                            <li><a href="/#">Conjuntos</a></li>
                            <li><a href="/#">Merchandising</a></li>
                        </ul>
                    </li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="flex-none">
                    <CartWidget />
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-rounded avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=55350" alt="Perfil" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href="/#" class="justify-between">
                                    Perfil
                                    <span class="badge">Nuevo</span>
                                </a>
                            </li>
                            <li><a href="/#">Configuración</a></li>
                            <li><a href="/#">Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NavBar