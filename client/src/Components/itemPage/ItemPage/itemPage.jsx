import { useState , useEffect,useContext } from "react";
import { useParams, useLocation } from 'react-router-dom';
import img1 from '../../img/Antologia-XXXVIII--38--Doble-MagnumBIG.webp'
import img2 from '../../img/Dominio-ChardonnayBIG.webp'
import img3 from '../../img/Estuche-Rutini-Extra-BrutBIG.webp'
import img4 from '../../img/Trumpeter-MalbecBIG.webp'
import img5 from '../../img/Trumpeter-Reserve-BlendBIG.webp'
import img6 from '../../img/Trumpeter-Reserve-Rose-de-MalbecBIG.webp'
import CartContext from '../../cart/CartContext'
const ItemPage = ()=>{
  const { name } = useParams();
  const query = useLocation().search.slice(1);
  const wineImages = {
    '../../img/Antologia-XXXVIII--38--Doble-MagnumBIG.webp': img1,
    '../../img/Dominio-ChardonnayBIG.webp': img2,
    '../../img/Estuche-Rutini-Extra-BrutBIG.webp': img3,
    '../../img/Trumpeter-MalbecBIG.webp': img4,
    '../../img/Trumpeter-Reserve-BlendBIG.webp': img5,
    '../../img/Trumpeter-Reserve-Rose-de-MalbecBIG.webp': img6,
  };

const [wine,setWine]=useState({})
const [quantity,setQuantity]=useState(1)
let image = wineImages[wine.image]!==undefined?wineImages[wine.image]: wine.image;
console.log(image)
const ctx = useContext(CartContext)

const Add = ()=>{
ctx.onAdd( wine.name,image, wine.price,quantity)}
    useEffect(() => {
  
        fetch(`/Vintus/Products/Buy/${name}?key=${query}`)
          .then((response) =>  response.json())
          .then((data) => {
            setWine(data)
  
          })
          .catch((error) => {
            console.error("Error fetching wine data:", error);
          });
    }, [name, query])
    return(<main className="itemPage">
      <section className="itemSec">
        <article className="itemImg" >
          <img src={image} alt={name} />
          <img src={image} alt={name}  style={{height: '110px',width:' 110px'}}/>
        </article>
        <article className="itemArt">
          <h2 className="under">{name}</h2>
          <h3 className="under" >CONTENIDO</h3>
          <p className="under">{wine.long_description}</p>

          <div className="itemAdd">
            <p>Precio unitario</p>
            <span className="price">{'$ ' +wine.price}</span>

            <p>Seleccione Cantidad</p>

            <div className="item-buttons">
            <button onClick={()=>{setQuantity(()=>quantity===1?1:quantity-1)}} >-</button>
            <div>{quantity}</div>
            <button onClick={()=>{setQuantity(()=>quantity+1)}}>+</button>

          </div>
          <button className="add" onClick={Add}>Agregar al carrito</button>
          </div>

        </article>
      </section>

    </main>)
}

export default ItemPage