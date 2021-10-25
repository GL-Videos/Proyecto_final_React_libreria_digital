// Elemento que contiene toda la etructura de la página web

import Header from "./Header";
import Footer from "./Footer";
import Books from "./ItemListContainer";


const AppBooks = () => {
    return (
        <>
        <Header/>
        <Books nombre="Gabriela" apellido="Lupidi"/>
        <Footer/>
        </>
    )
}


export default AppBooks;