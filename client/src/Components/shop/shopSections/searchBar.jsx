import { useRef } from "react"
const SearchBar =({setSearch})=>{
const searchBarRef = useRef(null);
    return(
        <section className="search" id="search">
        <article action="" className="search_form">
          <input type="text" id="searchBar" placeholder="Buscar vinos..." ref={searchBarRef}/>
          <button id="searchButton" onClick={()=>setSearch(searchBarRef.current.value)}><i className="fa fa-search"></i></button>
        </article>
      </section>
    )
}
export default SearchBar;