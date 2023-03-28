import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import Home from './components/Home';
import Characters from './components/Characters';

const App =()=>{
  return(
    <BrowserRouter>
      <div>
        <Nav/>
        <div>
        <Routes>
          
          
        <Route path='/' element={
        <Home/>
        }/>

        <Route path='/characters' element={
        <Characters/>
        }/>
       
        
        </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  ) 
}

export default App