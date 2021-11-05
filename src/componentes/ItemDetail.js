
import ItemCount from "./ItemCount";

const ItemDetail = ({image, title, author, price, description}) => {


  const getDataCounter = (dataCounter) => {
      console.log(`Se agregaron ${dataCounter} items al carrito de ${title}`);
  }

    return (
        <>
        <div className="productCatalogItems">
           <section className="asaid"> 
           <img src={image} alt="Portada" width="180"/>
           <h3>{title}</h3>
           <h4>{author}</h4>
           <h5>{price}</h5>
           <p>{description}</p>
           <ItemCount stock={7} initial={0} onAdd={getDataCounter}/>
           </section>
        </div>
      </>
    )
}

export default ItemDetail;
