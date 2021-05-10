import React from 'react';
import '../App.css';
import logo from '../Imagenes/Logo_ML.png'
import searchButton from '../Imagenes/ic_Search.png'


function SearchingBar(props) {
    let openElement =[]

    const peopleSearchingValue = (evento)=>{ props.setPeopleSearching(evento.target.value)}

    openElement.push( 
        <React.Fragment key={"2"}> 

        <div className="Header__elements">
        <div className='imgPrincipal'  > <img  src={logo} alt='imagen'/></div>
        
        <input type="text" role="search" placeholder="Nunca dejes de buscar" className="nabvar__searchInput"  onChange={peopleSearchingValue}/> 
        
        <div className='imgSearch'> <img type= "button" src={searchButton} alt='search button' style = {{margin:15}}/> </div>
        </div>

    </React.Fragment>)



    
        return(
        <div>
                {openElement}
        </div>);
    
    }
    
    export default SearchingBar;