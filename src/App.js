import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import Main from './components/Main.js';

function App() {
  return (
    <div>
    <Layout fixedHeader>
        <Header className="header-color" title={<a href="/ReactPortfolio" 
        style={{color:"white", textDecoration: "none", fontSize:'20px'}}>Home</a>}>
            <Navigation>
                <a href="/ReactPortfolio/AboutMe">About</a>
                <a href="/ReactPortfolio/Projects">Projects</a>
                <a href="/ReactPortfolio/Resume">Resume</a>
                <a href="/ReactPortfolio/Contact">Contact</a>
             
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
