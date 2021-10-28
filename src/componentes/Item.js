
// Hago la grilla que va a mostar la lista de productos con sus respectivas referencias. Uso el valor de prop libros, para poder traer dentro de cada etiqueta el valor que yo quiero.

const Item = ({libros}) => {
    return (
        <>
        <main className="productCatalog">
        <div className="productCatalogItems">
           <header>
               <img src={libros.pictureurl} alt="Portada libro" width="128" height="128"/>
           </header>
           <h3>{libros.title}</h3>
           <h4>{libros.author}</h4>
           <h5>{libros.price}</h5>
           <p>{libros.description}</p>
        </div>
        </main>
        </>
    )
    
}

export default Item;