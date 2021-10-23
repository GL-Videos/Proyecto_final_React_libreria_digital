// Elemento que contiene toda la etructura de la página web

import Header from "./Header";
import User from "./ItemListContainer";
import Footer from "./Footer";

const AppBooks = () => {
    return (
        <>
        <Header/>
        <User nombre="Gabriela" apellido="Lupidi"/>
        <Footer/>
        </>
    )
}


export default AppBooks;