import React from 'react';
import '../App.css'
// .toFixed(2)

function ElementInformation(props) {

  let list = []

  list.push( props.hidden === false ? < div key= "1" ></div> : 
    <div key="2"  className= " OpenInformation__element Direction__wrap "> 
      <section className="OpenElement__section-left">
        <div>
        <img
        src={props.objectsId.thumbnail}
        className="OpenInformation__image"
        alt={props.objectsId.title}
        />{" "}
        </div>
            <article className= " OpenInformation__text" >
            <h2 className= " OpenInformation__text--24size ">Descripción del producto:</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </article>
      </section>
        <section className="OpenElement__section-right OpenInformation__text">
              <p className= " OpenInformation__text--14size "> {props.objectsId.condition} - {props.objectsId.sold_quantity} vendidos </p>
              <h2 className= " OpenInformation__text--24size ">{props.objectsId.title} </h2>
              <h1 className= " OpenInformation__text--46size "> ${parseInt(props.objectsId.price)}</h1>
              <button className="btn "> Comprar </button>
        </section>
    </div>)


return (
  <div>{list}</div>
)}
    
    export default ElementInformation;