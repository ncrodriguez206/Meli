
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import ElementList from "./components/elements"; 
import ElementInformation from "./components/elementInformation";




function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home}/>
        <Route exact path="/item" component={ElementList} />
        <Route exact path="/Description" component={ElementInformation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

