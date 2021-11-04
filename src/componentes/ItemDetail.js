
import ItemCount from "./ItemCount";

const ItemDetail = ({image, title, author, price, description}) => {
    return (
        <>
        <div className="productCatalogItems">
           <section className="asaid"> 
           <img src={image} alt="Harry Potter" width="250"/>
           <h3>{title}</h3>
           <h4>{author}</h4>
           <h5>{price}</h5>
           <p>{description}</p>
           <ItemCount stock={7} initial={0} onAdd={function(){console.log(`Se agregaron x items al carrito`)}}/>
           </section>
        </div>
      </>
    )
}

export default ItemDetail;
