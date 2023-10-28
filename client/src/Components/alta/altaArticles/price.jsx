const Price =({price , setPrice , makeError})=>{

    return(
        <article className="form__field">
        <div className="Div" id="price-div">
            <input type="number" id="price" className="form__input" required min="0" step="0.01" placeholder="PRECIO" value={price.value} onChange={(event)=>setPrice(event.target.value)}/>
        </div>
        {price.er!=="" && price.er && <p id="price-error" className="animated">{makeError(price.er)}</p>}
    </article>
    )
}
export default Price