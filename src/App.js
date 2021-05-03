
import './App.css';
import ElementList from './components/elements';

function App() {
  return (
    <div className="App">
      <div className="App__container">

      <header role="banner" className="Header Header--color " > 
      <nav>
      <div className="Header__elements">
        <label for="searchObject" className="nabvar__search"> Nunca dejes de buscar <input type="text" role="search"/> <button className="search__button"></button></label>
        </div>
      </nav>
      </header>

      <body className="Content">
        <main>
          <section className="Information__element Direction__wrap"> 
          <div className="Information__image"></div> 
          <div className="Information__text Direction__column Text"><h2>Titulo </h2> <p className="Text--margin"> Texto informativo del objeto </p></div> 
          <div>
            <p>precio</p>
          </div>
          </section>
          
          <section>
          <p>SECTION IMG</p>
            <article><p>aca va el texto del producto</p></article>
          </section>
          <section ><p>SECTION - precio </p></section>
        
        </main>
        
        <footer>

        </footer>
      </body>
      </div>
    </div>
  

  );
}

export default App;
