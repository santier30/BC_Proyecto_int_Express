const Descriptions =({shortDes,longDes,setLongDes,setShortDes,makeError})=>{

    return(
        <section>
        <article className="form__field_description">
        <input type="text" id="short-description" className="form__input description animate" required maxLength="50" value={shortDes.value} placeholder="DESCRIPCIÓN CORTA" onChange={(event)=>setShortDes(event.target.value)}/>
        {shortDes.er!=="" && shortDes.er && <p id="short-description-error" className="animated">{makeError(shortDes.er)}</p>}
    </article>

    <article className="form__field_description">
        <textarea id="long-description" className="form__input description animate" required maxLength="200" value={longDes.value} placeholder="DESCRIPCIÓN LARGA" onChange={(event)=>setLongDes(event.target.value)}></textarea>
    {longDes.er!==""  && longDes.er && <p id="long-description-error" className="animated">{makeError(longDes.er)}</p>}
    </article>
    </section>
    )
}
export default Descriptions