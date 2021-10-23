
import ShoppingCart from './CartWidget.js'

// Encabezado de la página web

const Header = () => {
    return(
        <header className="encabezadoPrincipal">
            <div>
                <h1 className="logo">Libroteca</h1>
                <h5>Librería digital EPUB y PDF</h5>
            </div>
            
            <nav className="menu">
                <a href="#">Inicio</a>
                <a href="#">Categorías</a>
                <a href="#">Ofertas</a>
                <ShoppingCart/>
                <a href="#">Contacto</a>
            </nav>
            
        </header>
    )
}

export default Header;