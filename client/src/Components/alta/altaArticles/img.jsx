const Img =({img,setImg,makeError})=>{

    return(
        <article className="form__field">
        <div className="Div" id="img-url-div">
            <input type="url" id="img-url" className="form__input" required placeholder="URL DE LA IMAGEN" value={img.value} onChange={(event)=>setImg(event.target.value)}/>
        </div>
        {img.er!==""  && img.er && <p id="img-url-error" className="animated">{makeError(img.er)}</p>}
    </article>
    )
}
export default Img