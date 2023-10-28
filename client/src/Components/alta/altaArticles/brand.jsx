const Brand =({brand,setBrand ,makeError})=>{

    return(
        <article className="form__field">
        <div className="Div" id="marca-div">
            <input type="text" id="wine-brand" className="form__input" required placeholder="MARCA DE VINO" value={brand.value} onChange={(event)=>setBrand(event.target.value)}/>
        </div>
    {brand.er!=="" && brand.er && <p id="marca-error" className="animated">{makeError(brand.er)}</p>}
    </article>
    )
}
export default Brand