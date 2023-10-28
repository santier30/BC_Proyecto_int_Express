const Category =({category , setCategory, sub})=>{

    return(
        <article className="form__field">
        <div className="Div" id="categoria-div">
            <label htmlFor="wine-category" className="form__label">CATEGORÍA DE VINO:</label>
            <div className="Div__radio">
                <input type="radio" id="tinto" name="wine-category" className="wine-category" checked={category.value==="Tinto"} value="Tinto" onChange={(event)=>setCategory(event.target.value)}/>
                <label htmlFor="tinto">Tinto</label>
                <input type="radio" id="espumante" name="wine-category" className="wine-category" checked={category.value==="Espumante"} value="Espumante" onChange={(event)=>setCategory(event.target.value)}/>
                <label htmlFor="espumante">Espumante</label>
                <input type="radio" id="rose" name="wine-category" className="wine-category" checked={category.value==="Rosé"} value="Rosé" onChange={(event)=>setCategory(event.target.value)}/>
                <label htmlFor="rose">Rosé</label>
                <input type="radio" id="blanco" name="wine-category" className="wine-category" checked={category.value==="Blanco"} value="Blanco" onChange={(event)=>setCategory(event.target.value)}/>
                <label htmlFor="blanco">Blanco</label>
                <input type="radio" id="otros" name="wine-category" className="wine-category" checked={category.value==="Otros"} value="Otros" onChange={(event)=>setCategory(event.target.value)}/>
                <label htmlFor="otros">Otros</label>
            </div>
        </div>
       { category.er!=="" &&  sub && <p id="categoria-error" className="animated">Seleccione una categoria</p>}
    </article>
    )
}
export default Category