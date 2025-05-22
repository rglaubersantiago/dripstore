import logo from "../Header/assets/logo.svg"
import FlatIcon from "../Header/assets/FlatIcon.svg"
import Search from '../Header/assets/Search.svg'

import './style.css'

function Header() {

    return (
        <>
            <header id="header">
                <section id="section">
                    <div id="search-menu-container">
                        <img id="logo" src={logo} alt="Logo da digital college" />
                        <input id="search" type="search" placeholder="Pesquisar produto..." />
                        <img id="lupa" src={Search} alt="Ícone de lupa" />
                        <a href="#">Cadastre-se</a>
                        <nav>
                            <ul id="nav-list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Produtos</a></li>
                                <li><a href="#">Categorias</a></li>
                                <li><a href="#">Meus Pedidos</a></li>
                            </ul>
                        </nav>
                    </div>
                    <a id="button-entrar" href="">Entrar</a>
                    <img id='flat-icon' src={FlatIcon} alt="Icone de carrinho de compras de cor rosa" />
                </section>
            </header>
        </>
    )
}

export default Header
