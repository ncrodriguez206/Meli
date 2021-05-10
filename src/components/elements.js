import React , { useEffect}from 'react';
import '../App.css'
import truck from '../Imagenes/shipping.png'


function ElementList(props) {

    useEffect (()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=​:query')
        .then(response => response.json())
        .then (data => props.setObjects(data.results))
        .catch(err => {
            console.log(err)
          });
      }, []);
    
    console.log(props.objects)

     const truckImage = (element)=>{ if (element.shipping.free_shipping === true ){ return 'visible' } else { return 'hidden'}}
     const sendId = ( element)=>{ props.setObjectsId(element)}

let list =[]
list.push(  props.objects.map(obj => (
    
    <React.Fragment key={obj.id}> <section className="Information__element Direction__wrap" type="button" onClick={()=> sendId(obj.id)}> 
<div><img src={obj.thumbnail} className="Information__image" alt={obj.title} /> </div> 
<div className="Information__text Direction__column Text">
    <label  className="Information__text--inline"><h1> $ {parseInt(obj.price)}</h1><img src ={truck} alt='Free shipping' style = {{visibility: truckImage(obj) , marginLeft: 16}}/> </label>
<h2 style = {{margin: 0}} > {obj.title} </h2></div>
<div>
  <p className="Text--margin" > {obj.address.city_name} </p>
</div>
</section> 
</React.Fragment>
)))


    return(
    <div>
        {list}
    </div>);
}

export default ElementList;