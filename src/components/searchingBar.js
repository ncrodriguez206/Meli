import React from 'react';

import '../App.css';
import logo from '../Imagenes/Logo_ML.png'
import searchButton from '../Imagenes/ic_Search.png'



function SearchingBar(props) {

const click = () => {
    getInfo(props.results)
}


const getInfo = (query) => {
props.setisLoading(true);
fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(response => response.json())
.then(data => { data.slice(0, 3)})
.then(data => {
props.setresults(data["results"]);
props.setisLoading(false);
});
}

return (
<div>
<div className="Header__elements">
<div className='imgPrincipal'  > <img  src={logo} alt='imagen'/></div>
<input onChange={(event) => getInfo(event.target.value)} role="search" placeholder="Nunca dejes de buscar" className="nabvar__searchInput"/>
{props.isLoading && <span>Cargando...</span>}
<div className='imgSearch' type="button" onClick={()=> {click()}} >  <img  src={searchButton} alt='search button' style = {{margin:15}}/> </div>
</div>
</div>
)
}

    export default SearchingBar;