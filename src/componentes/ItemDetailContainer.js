

import ItemDetail from "./ItemDetail";
import libros from "./libros.json";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [saga,setSaga]=useState([])
    const {id} = useParams();

    const results = libros.filter(libro => libro.id == id);

    const getItem = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(results)
            },2000);
        });
    }


        useEffect(()=>{
            getItem().then(setSaga)
        }, []);

    // console.log(saga);

    return (
        <section className="asaid">
            <h2>Libro</h2>
            <div className="productCatalog">
                {saga.map(saga => 
                        <ItemDetail 
                        key={saga.id}
                        image={saga.pictureurl}
                        title={saga.title}
                        author={saga.author}
                        price={saga.price}
                        description={saga.description}
                        />)}
            </div>
        </section>
    )
}

export default ItemDetailContainer;
