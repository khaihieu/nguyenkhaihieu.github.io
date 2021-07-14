import React, { Component } from 'react'

import{
    BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Contact from '../component/Contact';
import Home from '../component/Home';
import Home2 from '../component/Home2';
import MyPicture from '../component/MyPicture';
import Result from '../component/Result';
import Lab1 from '../component/Lab1';
import Lab2 from '../component/Lab2';
import Lab2copy from '../component/Lab2copy';
import Lab3 from '../component/Lab3';
import Lab4 from '../component/Lab4';
import About from '../component/About';
export default class RouterURL extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/MyPicture" component={MyPicture}/>
                <Route exact path="/Result" component={Result}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Lab1" component={Lab1}/>
                <Route exact path="/Lab2" component={Lab2}/>
                <Route exact path="/Lab3" component={Lab3}/>
                <Route exact path="/Lab4" component={Lab4}/>
                <Route exact path="/About" component={About}/>
            </div>
            </Router>
        )
    }
}

