import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropertyComponent from './components/PropertyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePropertyComponent from './components/CreatePropertyComponent';
import ViewPropertyComponent from './components/ViewPropertyComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={PropertyComponent}></Route>
            <Route path="/properties" component={PropertyComponent}></Route>
            <Route path="/add-property/:id" component={CreatePropertyComponent}></Route>
            <Route path="/view-property/:id" component={ViewPropertyComponent}></Route>
            {/* <Route path = "/update-property/:id" component = {UpdatePropertyt}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
