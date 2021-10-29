
import ShoppingCart from './CartWidget.js'

// Encabezado de la página web

const Header = () => {
    return(
        <header className="principalHeader">
            
            <nav className="menu">
                <a href="/">Inicio</a>
                <a href="/">Categorías</a>
                <a href="/">Contacto</a>
                <a href="/"><ShoppingCart/></a>
                
            </nav>
            
        </header>
    )
}

export default Header;