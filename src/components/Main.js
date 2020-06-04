import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Resume from './Resume.js';

const Main = () => (
    <Switch>
        <Route exact path="/ReactPortfolio" component={LandingPage} />
        <Route path="/ReactPortfolio/AboutMe" component={AboutMe} />
        <Route path="/ReactPortfolio/Projects" component={Projects} /> 
        <Route path="/ReactPortfolio/Resume" component={Resume} />
        <Route path="/ReactPortfolio/Contact" component={Contact} />
        
       

    </Switch>

)

export default Main;