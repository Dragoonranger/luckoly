
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import { Home } from './Home';
import { Socials } from './Socials';
import { Columns, Gallery } from './Gallery';
import React from 'react';


function App() {
  return (
    <React.Fragment>
     <Router>
      <NavigationBar />

    <Sidebar />

    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Socials" component={Socials} />
    <Route component={Gallery} />
     </Switch>   
   </Router>
 </React.Fragment>
   )

  }
 
export default App;