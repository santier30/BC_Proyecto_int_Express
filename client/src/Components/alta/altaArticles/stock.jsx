const Stock =({stock , setStock , makeError})=>{

    return(
        <article className="form__field">
        <div className="Div" id="stock-div">
            <input type="number" id="stock" className="form__input" required min="0" placeholder="CANTIDAD EN STOCK" value={stock.value} onChange={(event)=>setStock(event.target.value)}/>
        </div>
        {stock.er && stock.er!=="" && <p id="stock-error" className="animated">{makeError(stock.er)}</p>}
    </article>
    )
}
export default Stock