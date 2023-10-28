const  Name =({name,setName ,makeError})=>{

    return(
        <article className="form__field">
        <div className="Div" id="first__name-div">
            <input type="text" id="first-name" className="form__input" required minLength="3" placeholder="NOMBRE" value={name.value} onChange={(event)=>setName(event.target.value)}/>
            {name.er!=="" && name.er   && <p id="first-name-error" className="animated">{makeError(name.er)}</p>}
        </div>
    </article>
    )
}
export default  Name