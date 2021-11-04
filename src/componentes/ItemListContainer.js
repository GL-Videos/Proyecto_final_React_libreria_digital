import ItemList from "./ItemList"
import libros from './libros.json';
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

// Galería de Libros

const ItemListContainer = ({}) => {

    const[item,setItems]=useState([])

// Filtro los productos

    const {categoryId} = useParams();

     useEffect(() => {

        let promesa 
        
         if(categoryId){
             console.log("Acá hago el pedido de productos filtrando por categoría", categoryId);

            promesa = new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                     resolve(libros.filter(libros => libros.category === categoryId))
                 },2000)
             })

         }else{
             console.log("Acá hago el pedido de productos sin filtrar");

             promesa = new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                     resolve(libros)
                 },2000)
             })
         }
         
            promesa.then(resolve => {
            
                setItems(resolve)
            })
     }, [categoryId])

    return (
            
        <>

        <div>
            <h2 className="sales">Libros digitales</h2>
            <main className="productCatalog"><ItemList items={item}/></main>
        </div>

        <h4 className="coderHouse">Clase 8 - Primera Entrega del Proyecto Final - Gabriela Lupidi</h4>
        
        </>
    )
}

    
export default ItemListContainer;
