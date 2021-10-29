import React,{useState} from "react";
import ItemCount from "./ItemCount";

// Hacemos el contenedor del contador, donde van a estar las funciones de los botones para sumar, restar y para agregar al carrito. Dentro del componente ItemCount que importamos, asignamos las funciones para darle la funcionabilidad a los props.

const CountContainer = ({initial,stock,productName,}) => {
    
    const [state, setState] = useState(initial);

    const showCounterAdd = () => {
        if (state < stock) {
            setState(state + 1);
        } else {
            setState(stock)
            console.log("Llegaste al límite de stock");
        }
    }

    const showCounterLess = () => {
        if(state > 0) {
            setState(state - 1);
        } else {
            setState(state)
        }
    }

    const onAdd =()=>{
        console.log(`El cliente agregó ${state} items de ${productName} al carrito`);
                };
        
        
        
            return (
                <>
                <ItemCount min={showCounterLess} max={showCounterAdd} onAdd={onAdd} state={state}  productName={productName}/>
                </>
            );
    
}

export default CountContainer;