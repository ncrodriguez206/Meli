
import React , {useState}from 'react';
//import { Link } from 'react-router-dom';
import ElementList from '../components/elements';
import ElementInformation from '../components/elementInformation';
import SearchingBar from '../components/searchingBar';
//import SearchingBar1 from '../App';

function Home() {
  const [results, setresults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [objectsId, setObjectsId] = useState([]);  
  const [hidden, setHidden] = useState(false);

  return (


    <div className="App">
      <div className="App__container">
      <header role="banner" className="Header Header--color " > 
      <nav>
      <SearchingBar results={results} setresults={setresults} isLoading ={isLoading} setisLoading = {setisLoading}/>
      </nav>
      </header>
        
        <div className="Content">
        <main>
          <div>
          <ElementList results={results} setresults={setresults} isLoading ={isLoading} setisLoading = {setisLoading} objectsId={objectsId} setObjectsId={setObjectsId} setHidden={setHidden}/>
          </div>
          <ElementInformation objectsId={objectsId}  hidden={hidden}/>
        </main>
        
        <footer>
        </footer>
      </div>
      </div>
    </div>
  
  );
}

export default Home;