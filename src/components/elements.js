import React from "react";
import "../App.css";
import truck from "../Imagenes/shipping.png";
//import { Link } from 'react-router-dom';
//<Link className= to='/Descripción'></Link>}

function ElementList(props) {


const truckImage = (element) => {
    if (element.shipping.free_shipping === true) {
    return "visible";
    } else {
    return "hidden";
    }
};
const sendId = (element) => {
    props.setObjectsId(element);
    props.setresults([]);
    props.setHidden(true)

};

return (

<div>
    
    {props.results.map(item => {
    return <section key={item.id}>
    {" "}
    <section
    className="Information__element Direction__wrap"
    type="button"
    onClick={() => sendId(item)}
    >
    <div>
        <img
        src={item.thumbnail}
        className="Information__image"
        alt={item.title}
        />{" "}
    </div>
    <div className="Information__text Direction__column Text">
        <label className="Information__text--inline">
        <h1> $ {parseInt(item.price)}</h1>
        <img
            src={truck}
            alt="Free shipping"
            style={{ visibility: truckImage(item), marginLeft: 16 }}
        />{" "}
        </label>
        <h2 style={{ margin: 0 }}> {item.title} </h2>
    </div>
    <div>
        <p className="Text--margin"> {item.address.city_name} </p>
    </div>
    </section>
    </section>
    })}
    </div> 


)
}

export default ElementList;
