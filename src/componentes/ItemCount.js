import { useState } from "react";

// Creamos el contador de items

const ItemCount = ({stock, initial, onAdd}) => {

    const [state, setState] = useState(initial);

    const showCounterAdd = () => {
        if (state < stock) {
            setState(state + 1);
        } else {
            setState(stock)
        }
    }

    const showCounterLess = () => {
        if(state > 0) {
            setState(state - 1);
        } else {
            setState(state)
        }
    }


    return (
        <>
        <div className="keypad">
            <button onClick={showCounterLess} className="buttonAdd">-</button>
            <p className="buttonAddState">{state}</p>
            <button onClick={showCounterAdd} className="buttonAdd">+</button>
        </div>
        <div>
            <button onClick={onAdd} className="buttonCart">Agregar al carrito</button>
        </div>
        </>
    )



    // Reducción de código
    // return (
    //     <>
    //         <button onClick={() => setState(state-1)} className="buttonLess">-</button>
    //         <p className="buttonAddState">{state}</p>
    //         <button onClick={() => setState(state+1)} className="buttonAdd">+</button>
    //     </>
    // )

}

export default ItemCount;