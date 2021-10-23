import ItemCount from "./ItemCount";
import portada_el_padrino from "../multimedia/portada_el_padrino.jpg"

// Galería de Libros

const Books = () => {

    return (
        <>
        <section className="portadas">
            <div><img src={portada_el_padrino} alt="El Padrino" className="portadaLibro"/></div>
            <div><ItemCount/></div>
        </section>
        
        </>
    )


}

        
export default Books;

