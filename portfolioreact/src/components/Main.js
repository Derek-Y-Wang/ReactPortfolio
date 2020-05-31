import React from 'react';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Resume from './Resume.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} /> 
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        
       

    </Switch>

)

export default Main;