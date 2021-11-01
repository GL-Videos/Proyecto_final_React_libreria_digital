import ItemCount from "./ItemCount";
import portada_el_padrino from "../multimedia/portada_el_padrino.jpg"
import ItemList from "./ItemList"
import libros from './libros.json';
import {useState} from 'react'

// Galería de Libros

const ItemListContainer = ({nombre, apellido}) => {

    const[item,setItems]=useState([])
/* Hago una promesa que indique que si la respuesta de la llamada es correcta muestre con un retraso de 2 segundos el array de json que me va a venir mapeado desde ItemList.js
Si la respuesta no es correcta, que me muestre un mensaje de error por consola*/

    const call = new Promise((resolve,reject)=>{
       if(resolve){ setTimeout(()=>{
            resolve(libros)
        },2000)

    } else{
        reject(console.log("Error en cargar las ofertas"))
    }        
    })

// Usando el estado del array que viene del json, si la respuesta es conrrecta que me imprima la llamada correcta

    call.then(resolve => {
        setItems(resolve)
    })

    return (
            
        <>

        <section className="asaid">
            <h2>Destacados del mes</h2>
            <div>
                <img src={portada_el_padrino} alt="El Padrino" className="portadaLibro" width="150px"/>
            </div>
            <h3>El Padrino</h3>
            <h4>$300</h4>
            <div>
                <ItemCount stock={10} initial={0} onAdd={function(){console.log(`Se agregaron x items al carrito`)}}/>
            </div>
        </section>

        <div>
            <h2 className="sales">Ofertas del mes</h2>
            <main className="productCatalog"><ItemList items={item}/></main>
        </div>

        <h4 className="coderHouse">Clase 7 - Desafío: Detalle de Producto - {nombre} {apellido}</h4>
        
        </>
    )
}

    
export default ItemListContainer;
