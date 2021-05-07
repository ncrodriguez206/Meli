
import './App.css';
import ElementList from './components/elements';
import ElementInformation from './components/elementInformation';
import SearchingBar from './components/searchingBar';


function App() {
  let peopleSearching 
  let requestURL = 'https://api.mercadolibre.com/sites/MLA/search?q=​:query'
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
request.send();
request.onload = function() {
  const superHeroes = request.response;
  console.log(superHeroes);
}


  return (
    <div className="App">
      <div className="App__container">
          <SearchingBar/>
        <body className="Content">
        <main>
          <div id="mostrar" ></div>
          <ElementList/>
          <ElementInformation/>
        </main>
        
        <footer>

        </footer>
      </body>
      </div>
    </div>
  

  );
}

export default App;
