import ItemDetail from "./ItemDetail";
import {useState} from 'react';


const ItemDetailContainer = () => {

    const [books,setBooks]=useState()

    fetch("https://fedeperin-harry-potter-api.herokuapp.com/libros/3")
    .then(response=>response.json())
    .then(data=>setBooks(data.results));
     

    const getItem = new Promise((resolve,reject)=>{
        if(resolve){ setTimeout(()=>{
            resolve(setBooks)
        },2000)
        
        } else{
            reject(console.log("Error en cargar las ofertas"))}        
        })
        

    getItem.then(resolve => {
        setBooks(resolve)
    })


    return (
            
        <>
            <div className="asaid">
                {books && books.map(item=><ItemDetail key={item.id} jsonBooks={item}/>)}
            </div>
        </>
    )

    }
    
export default ItemDetailContainer;