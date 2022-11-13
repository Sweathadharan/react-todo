//import logo from './logo.svg';
import './App.css';
import Test  from './Test';
//import Egfun from './fun';
//import Lan from './ClassTest';
// import Todoo from './filter';
import Todo from './filter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
 // return (
   // <div className="App">
     // <header className="App-header">
       // {/*<img src={logo} className="App-logo" alt="logo" />*/ }
        /*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <h1>Todo </h1>
        <Two/>
        <Todo/>
        </header>
  </div>
); */
    
return(
<BrowserRouter>
<Routes>
  <Route path= {'/'} element= {<Home />}/>
  <Route path= {'/filter'} element= {<Todo />}/>
  <Route path= {'/Test'} element= {<Test />}/>
</Routes>
</BrowserRouter>
);  
}

export default App;

