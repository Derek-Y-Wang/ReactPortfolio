import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main.js';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact Me</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact Me</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main />
        </Content>

    </Layout>
</div>
  );
}

export default App;
