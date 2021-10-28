import ItemCount from './CountContainer';
import portada_el_padrino from "../multimedia/portada_el_padrino.jpg"
import ItemList from "./ItemList"
import libros from './libros.json';
import {useState} from 'react'

const Books = ({nombre, apellido,}) => {


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
        <h2>Clase 6 - Desafío: Catálogo con MAPS y Promises - {nombre} {apellido}</h2>

        <section className="portadas">
            <div><img src={portada_el_padrino} alt="El Padrino" className="portadaLibro"/></div>
            <div>
                <ItemCount productName="El Padrino" stock={10} initial={0}/>
            </div>
        </section>
            <div>
                <h2 className="ofertas">OFERTAS DEL MES</h2>
                <ItemList items={item}/>
            </div>
        </>
    )
}

    
export default Books;
