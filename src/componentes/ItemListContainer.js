import ItemList from "./ItemList";
import libros from "./libros.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Galería de Libros

const ItemListContainer = ({}) => {
  const [item, setItems] = useState([]);

  // Filtro los productos

  const { categoryId } = useParams();

  useEffect(() => {
    let promesa;

    if (categoryId) {
      promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(libros.filter((libros) => libros.category === categoryId));
        }, 2000);
      });
    } else {
      promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(libros);
        }, 2000);
      });
    }

    promesa.then((resolve) => {
      setItems(resolve);
    });
  }, [categoryId]);

  if (item.length === 0) {
    return (
      <div className="loading">
        <img src="/loading3.gif" alt="Cargando" />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h2 className="sales">Libros digitales</h2>
          <main className="productCatalog">
            <ItemList items={item} />
          </main>
        </div>

        <h4 className="coderHouse">
          Clase 11 - Desafío: Cart View - Gabriela Lupidi
        </h4>
      </>
    );
  }
};

export default ItemListContainer;
