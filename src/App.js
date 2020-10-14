import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import displayMealsContainer from './Containers/displayMealsContainer';
class App extends Component {
  render() {
    return (
 
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={displayMealsContainer} />
  </Switch>
  </BrowserRouter>
  );
    }
}

export default App;


