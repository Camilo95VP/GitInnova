import React from 'react';
import Form from './components/Form';
import Dashboard from "./components/Dashboard";
import { Route, BrowserRouter, Switch } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
);

export default App;
