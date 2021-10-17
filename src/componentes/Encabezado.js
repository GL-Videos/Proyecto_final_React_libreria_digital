
import Carrito from './CartWidget.js'

// Encabezado de la página web

const Encabezado = () => {
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
                <Carrito/>
                <a href="#">Contacto</a>
            </nav>
            
        </header>
    )
}

export default Encabezado;