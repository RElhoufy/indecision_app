import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; //using react-router-dom
import IndecisionApp from '../components/IndecisionApp';
import AboutPage from '../components/AboutPage';
import Navbar from '../components/Navbar';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>    
                <Route path="/" component={IndecisionApp} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
