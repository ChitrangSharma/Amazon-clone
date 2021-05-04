import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
// import Product from './Components/Product'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div className="app">
  {/* BEM Convention */}

      <Switch>
      <Route path="/" >
        <Header/>
      <Home/>
        </Route>
        <Route path="/Checkout" >
        <Header/>
        {/* <Checkout /> */}
        </Route>

        
      </Switch>
    
      {/* Home */}

      {/* <Product/> */}
    </div>

    </Router>

  )
}

