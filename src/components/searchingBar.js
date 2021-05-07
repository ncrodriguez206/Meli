import React from 'react';
import '../App.css'

function SearchingBar(props) {
    let openElement =[]
    openElement.push( 
        <React.Fragment key={"2"}> 

      <header role="banner" className="Header Header--color " > 
      <nav>
        <div className="Header__elements">
        <label for="searchObject" className="nabvar__search"> Nunca dejes de buscar <input type="text" role="search"/> <button className="search__button"></button></label>
        </div>
      </nav>
      </header>

    </React.Fragment>)
    
        return(
        <div>
            <ul className="List__element">
                {openElement}
            </ul>
        </div>);
    
    }
    
    export default SearchingBar;