
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import sagasJSON from "./sagas.json";
import {useState, useEffect} from 'react';

const ItemDetailContainer = () => {
    
    const [saga,setSaga]=useState([])
    
    
    const getItem = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(sagasJSON)
            },2000);
        });
    }

            
        useEffect(()=>{
            getItem().then(setSaga)
        }, []);

    // console.log(saga);

    return (
        <section className="asaid">
            <h2>Destacados de la semana</h2>
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
            <ItemCount stock={7} initial={0} onAdd={function(){console.log(`Se agregaron x items al carrito`)}}/>
        </section>
    )
}

export default ItemDetailContainer;
