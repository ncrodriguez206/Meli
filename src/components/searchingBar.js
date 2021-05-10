import React from 'react';
import '../App.css';
import logo from '../Imagenes/Logo_ML.png'


function SearchingBar(props) {
    let openElement =[]

    const peopleSearchingValue = (evento)=>{ props.setPeopleSearching(evento.target.value)}

    openElement.push( 
        <React.Fragment key={"2"}> 

        <div className="Header__elements">
        <img className='imgPrincipal' src={logo} alt='imagen'/>
        <label for="searchObject" className="nabvar__search" >  
        <input type="text" role="search" placeholder="Nunca dejes de buscar" className="nabvar__searchInput"  onChange={peopleSearchingValue}/> 
        <button className="search__button"></button></label>
        </div>

    </React.Fragment>)



    
        return(
        <div>
                {openElement}
        </div>);
    
    }
    
    export default SearchingBar;