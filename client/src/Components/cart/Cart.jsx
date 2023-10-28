import CartItem from "./cartItem"
const Cart = (props)=>{
  const inCartFood = props.cartItem
  .filter((dish) => dish.Amount > 0);
  
    return(
        <section className={"cart "+props.displayState} id="cart_section">
        <article className="cart_items" id="Cart-items">
        {inCartFood.map((wine) => (
              <CartItem
                Name={wine.Name}
                Price={wine.Price}
                Img={wine.Img}
                Amount={wine.Amount}
                key={Math.random()}
                onIncrease={props.onIncrease}
                onReduce={props.onReduce}
              />
            ))}
        </article>
        
        <article className="cart_finish">
          <div>
            <h2>Subtotal</h2>
            <span id="total">{inCartFood[0]?inCartFood.reduce((a, c) => {return a += parseFloat(c.Price)*c.Amount}, 0).toFixed(2):"PRECIO TOTAL"}</span>
          </div>
          <button id="cart_submit">Finalizar Pedido</button>
        </article>
        </section> 
    )
}
export default Cart
