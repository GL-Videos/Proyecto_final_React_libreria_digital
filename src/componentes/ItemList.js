import {useState, useEffect} from 'react'


const ItemList = () => {

    const [items,setItems] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setItems(
                [{id:1, title:"1984",price:"$300", img: "https://ih1.redbubble.net/image.632703468.6415/flat,128x128,075,f-pad,128x128,f8f8f8.u6.jpg"},
                 {id:2, title:"Orgullo y Prejuicio",price:"$250", img: "https://descargas.ams3.digitaloceanspaces.com/images/7860/orgullo-y-prejuicio_icon_android.jpg"},
                 {id:3, title:"Harry Potter y la piedra filosofal",price:"$400", img: "https://m.media-amazon.com/images/I/71xQ5ijeYHL._CR0,204,1224,1224_UX256.jpg"}]);
        }, 2000)
    }, []);


    return (
        <>
        <div>
            {items.map((e, i)=>{
            return (
                <>
                    <img key={e.id} src={e.img} alt="Portada libro" width="128" height="128"/>
                    <p key={e.id}><a href="#">{e.title} - {e.price}</a></p>
                </>
            )
        })}
        </div>
        </>
    )

}

export default ItemList;