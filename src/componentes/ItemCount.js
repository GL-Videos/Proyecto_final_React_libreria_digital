

// Creamos el contador de items

const ItemCount = ({min, max, state, productName, onAdd}) => {

    // console.log(state);

    return (
        <>
            <h3>{productName}</h3>
        <div className="keypad">
            <button onClick={min} className="buttonAdd">-</button>
            <p className="buttonAddState">{state}</p>
            <button onClick={max} className="buttonAdd">+</button>
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