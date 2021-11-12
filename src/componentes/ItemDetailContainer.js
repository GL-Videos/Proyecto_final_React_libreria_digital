import ItemDetail from "./ItemDetail";
import libros from "./libros.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [saga, setSaga] = useState([]);
  const { id } = useParams();

  const results = libros.filter((libro) => libro.id == id);

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(results);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then(setSaga);
  }, []);

  if (saga.length === 0) {
    return (
      <div className="loading">
        <img src="/loading3.gif" alt="Cargando" />
      </div>
    );
  } else {
    return (
      <section className="asaid">
        <h2>Libro</h2>
        <div className="productCatalog">
          {saga.map((saga) => (
            <ItemDetail key={saga.id} books={saga} />
          ))}
        </div>
      </section>
    );
  }
};

export default ItemDetailContainer;
