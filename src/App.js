import React,{Component} from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './components/home.js';
import Theory from './components/theory.js';
import {BrowserRouter as Router,Routes ,Route, Link} from "react-router-dom";

class App extends Component{
  render(){
    return (
      
          <Router>
            <div className='App'>
      <Navbar/>

        
        <Routes>
        <Route exact path = "/" element={<Home/>}>
              
         </Route>
         <Route exact path = "/theory" element={<Theory/>}>
             
        </Route>
      </Routes>

  </div>
   </Router>
      
    );
  }
  
}

export default App;
