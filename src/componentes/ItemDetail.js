import ItemCount from './CountContainer';
import harry_potter_3 from '../multimedia/harry_potter_3.jpg';

const ItemDetail =({jsonBooks})=>{
    console.log(jsonBooks);
    return(
      <>
        <div className="productCatalogItems">
           <section className="asaid"> 
               <h2>Saga del mes</h2>
               <img src={harry_potter_3} alt="Harry Potter" width="128" height="128"/>
           </section>
           <h3>{jsonBooks.libro}</h3>
           <h4>{jsonBooks.autora}</h4>
           <h5>$400</h5>
           <a href={jsonBooks.id} className="itemMore">Ver más...</a>
           <p>{jsonBooks.descripcion}</p>
        </div>
        <ItemCount productName={jsonBooks.libro} stock={6} initial={1}/>
      </>
    )

};



export default ItemDetail;
