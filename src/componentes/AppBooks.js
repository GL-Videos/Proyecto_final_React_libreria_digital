// Elemento que contiene toda la etructura de la página web

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";


const AppBooks = () => {
    return (
        <>
        <BrowserRouter>
            <Header/>
            {/* <ItemDetailContainer/> */}
            <Route exact path="/" exact component={ItemListContainer}/>
            <Route exact path="/categoria/:categoryId" component={ItemListContainer}/>
            <Route exact path="/item/:id" component={ItemDetailContainer}/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}


export default AppBooks;