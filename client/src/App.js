import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import Navbar from './components/Navbar';
import Details from './views/Details';
import Search from './views/Search';
import TickerWidget from './components/TickerWidget';


function App() {

    const [coinList, setCoinList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Main coinList={coinList} setCoinList={setCoinList}/>
            </Route>
            <Route exact path='/coin/:id/:currency'>
              <Details/>
            </Route>
            <Route exact path='/search'>
              <Search setCoinList={setCoinList} coinList={coinList}/>
            </Route>
          </Switch>
        <TickerWidget/>
      </BrowserRouter>
    </div>
  );
}

export default App;
