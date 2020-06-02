import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import Main from './components/Main.js';

function App() {
  return (
    <div>
    <Layout fixedHeader>
        <Header className="header-color" title={<a href="/" style={{color:"white", textDecoration: "none"}}>Home</a>}>
            <Navigation>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact Me</a>
             
            </Navigation>
        </Header>
        
        <Content>
            <div className="page-content"/>
            <Main />
        </Content>

    </Layout>
</div>
  );
}

export default App;
