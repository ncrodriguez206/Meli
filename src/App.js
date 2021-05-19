
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home"



function App() {

  return (
    <div><Home/> </div>
  );
}

export default App;


/*

export function SearchingBar1(props) {

  const [peopleSearching, setPeopleSearching] = useState("");  

  let openElement =[]
  let url = 'https://api.mercadolibre.com/sites/MLA/search?q='
  
  const peopleSearchingValue = (evento)=>{ setPeopleSearching(evento.target.value)}

  const click =() => { 
      props.setPeopleSearch(peopleSearching)
      props.setUrl(url+peopleSearching) 
  }

  openElement.push( 
      <React.Fragment key={"2"}> 

      <div className="Header__elements">
      <div className='imgPrincipal'  > <img  src={logo} alt='imagen'/></div>
      
      <input type="text" role="search" placeholder="Nunca dejes de buscar" className="nabvar__searchInput"  onChange={peopleSearchingValue}/> 
      
      <div className='imgSearch'>  <img  src={searchButton} alt='search button' style = {{margin:15}} onClick={()=>click()}/> </div>
      </div>

  </React.Fragment>)



  
      return(
      <div>
              {openElement}
      </div>);
  
  }
  

*/


