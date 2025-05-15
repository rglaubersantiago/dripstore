import logo from "../Header/assets/logo.svg"
import FlatIcon from "../Header/assets/FlatIcon.svg"
import Search from '../Header/assets/Search.svg'

import './style.css'

function Header() {

    return (
        <>
            <header className="header">
                <section className="header__searchMenu">
                    <div>
                        <img src={logo} alt="Logo da digital college" />
                        <input type="search" placeholder="Pesquisar produto..." />
                        <img id="lupa" src={Search} alt="Ícone de lupa" />
                        <a href="#">Cadastre-se</a>
                        <a id="button-entrar" href="">Entrar</a>
                        <img id='flat-icon' src={FlatIcon} alt="Icone de carrinho de compras de cor rosa" />
                    </div>
                    <nav class='nav-container'>
                        <ul class="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Categorias</a></li>
                            <li><a href="#">Meus Pedidos</a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header
