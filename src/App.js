
import React , {useState}from 'react';
import './App.css';
import ElementList from './components/elements';
import ElementInformation from './components/elementInformation';
import SearchingBar from './components/searchingBar';


function App(props) {
  const [peopleSearching, setPeopleSearching] = useState("");  
  const [objects, setObjects] = useState([]);  
  const [objectsId, setObjectsId] = useState([]);  
  console.log(objectsId)


  return (
    <div className="App">
      <div className="App__container">
      <header role="banner" className="Header Header--color " > 
      <nav>
      <SearchingBar peopleSearching= {peopleSearching}  setPeopleSearching={setPeopleSearching}/>
      </nav>
      </header>
          
        <div className="Content">
        <main>
          <div id="mostrar" ></div>
          <ElementList objects= {objects} setObjects = {setObjects} objectsId={objectsId} setObjectsId={setObjectsId}/>
          <ElementInformation objectsId={objectsId}/>
        </main>
        
        <footer>

        </footer>
      </div>
      </div>
    </div>
  

  );
}

export default App;
