import ItemCount from "./ItemCount";
import portada_el_padrino from "../multimedia/portada_el_padrino.jpg"

// Galería de Libros

const Books = ({nombre, apellido}) => {
    return (
            
        <>
        <h2>Clase 5 - Desafío: Contador con botón - {nombre} {apellido}</h2>

        <section className="portadas">
            <div><img src={portada_el_padrino} alt="El Padrino" className="portadaLibro"/></div>
            <div>
                <ItemCount stock="10" initial="0" onAdd={function(){console.log(`Se agregaron x items al carrito`)}}/>
            </div>
        </section>
        </>
    )
}

    
export default Books;
