import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Test from "./Test";
const Base =() =>
{
    return(
        
    <BrowserRouter>
    {

    }
    <Routes>
      {

      }
      <Route path = {'/'} element = {<Home/>} />
    <Route path={'/filter'} element={<Todo />} />
    <Route path={'/Test'} element={<Test />} />

  </Routes>
  </BrowserRouter>

    );
}

export default Base;
