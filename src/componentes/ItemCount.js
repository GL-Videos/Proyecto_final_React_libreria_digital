
// Creamos el contador de items

const ItemCount = ({min, max, state, productName, price, onAdd}) => {

    return (
        <>
            <h3 className="titleProduct">{productName}</h3>
            <h5 className="titleProduct">{price}</h5>
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
}

export default ItemCount;