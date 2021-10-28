import React,{useState} from "react";
import ItemCount from "./ItemCount";

const CountContainer = ({initial,stock,productName}) => {
    
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
                <ItemCount min={showCounterLess} max={showCounterAdd} onAdd={onAdd} state={state} productName={productName}/>
                </>
            );
    
}

export default CountContainer;