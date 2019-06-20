import React,{Fragment} from 'react';
import './App.css';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Lyrics from './components/tracks/Lyrics';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
    <Fragment className="App">
      <Navbar/>
     <div className="container">
       <div className="container">
         <Switch>
           <Route exact path="/" component={Index}/>
           <Route exact path="/lyrics/track/:id" component={Lyrics}/> 
         </Switch>
       </div>
     </div>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
