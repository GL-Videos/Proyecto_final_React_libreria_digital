// Elemento que contiene toda la etructura de la página web

import Encabezado from "./Encabezado";
import Usuario from "./ItemListContainer";
import Footer from "./Footer";

const App_libros = () => {
    return (
        <>
        <Encabezado/>
        <Usuario nombre="Gabriela" apellido="Lupidi"/>
        <Footer/>
        </>
    )
}


export default App_libros;