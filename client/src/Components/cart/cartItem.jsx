const CartItem = (props)=>{
    const reduceHandler = ()=>{
        props.onReduce(props.Name)
      }
      const increaseHandler = ()=>{
        props.onIncrease(props.Name)
      }
    return(
        <div className="cart_item">
        <img src={props.Img} alt="" className="cart-img"/>
        <div className="cart_item_content">
          <h3>{props.Name}</h3>
          <p>{props.Price}</p>
          <div className="item-buttons">
            <button onClick={reduceHandler}>-</button>
            <span>{props.Amount}</span>
            <button onClick={increaseHandler}>+</button>
          </div>
        </div>
      </div>
    )
}
export default CartItem
