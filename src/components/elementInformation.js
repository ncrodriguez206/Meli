import React from 'react';
import '../App.css'

function ElementInformation(props) {
    let openElement =[]
    openElement.push( 
        <React.Fragment key={"1"}> 
        <section>
          <p>SECTION IMG</p>
            <article><p>aca va el texto del producto</p></article>
          </section>
          <section ><p>SECTION - precio </p>
        </section>
    </React.Fragment>)
    
        return(
        <div>
            <ul className="List__element">
                {openElement}
            </ul>
        </div>);
    
    }
    
    export default ElementInformation;