import React from 'react';
import '../App.css'


function ElementList(props) {
let list =[]
list.push( 
    <React.Fragment key={"1"}> <section className="Information__element Direction__wrap"> 
<div className="Information__image"></div> 
<div className="Information__text Direction__column Text"><h2>Titulo </h2> <p className="Text--margin"> Texto informativo del objeto </p></div> 
<div>
  <p>precio</p>
</div>
</section> 
</React.Fragment>)


    return(
    <div>
        <ul className="List__element">
            {list}
        </ul>
    </div>);

}

export default ElementList;