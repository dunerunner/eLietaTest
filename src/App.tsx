import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";

const routing = (
    <Router>
        <div>
            <Route path="/country/:code" component={Country}/>
            <Route path="/countries" component={Countries}/>
            <Route exact path="/" >
                <Redirect to="/countries" />
            </Route>
        </div>
    </Router>
);
const App = () => {
    return routing;
};

export default App;
