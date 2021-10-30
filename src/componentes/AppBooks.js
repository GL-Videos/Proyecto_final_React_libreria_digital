// Elemento que contiene toda la etructura de la página web

import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


const AppBooks = () => {
    return (
        <>
        <Header/>
        <ItemDetailContainer/>
        <ItemListContainer nombre="Gabriela" apellido="Lupidi"/>
        <Footer/>
        </>
    )
}


export default AppBooks;