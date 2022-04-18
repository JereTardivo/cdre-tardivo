import CartWidget from "./CartWidget"

const NavBar = () => {
    return (

        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a href="/#" class="btn btn-ghost normal-case text-xl">
                    <p>Elenense</p>

                </a>
            </div>
            <div class="flex-none">
                <CartWidget />
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img  href="https://github.com/JereTardivo/cdre-tardivo/blob/main/public/PROFILE.jpg" alt="Perfil" />
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

    )
}
export default NavBar