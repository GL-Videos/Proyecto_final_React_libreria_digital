// Elemento que contiene toda la etructura de la página web

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";


const AppBooks = () => {
    return (
        <>
        <BrowserRouter>
            <Header/>
            {/* <ItemDetailContainer/> */}
            <Route path="/" component={ItemListContainer} exact/>
            <Route path="/categoria/:categoryId" component={ItemListContainer} exact/>
            <Route path="/item/:id" component={ItemDetailContainer} exact/>
            <Route path="/cart" component={Cart} exact/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}


export default AppBooks;
