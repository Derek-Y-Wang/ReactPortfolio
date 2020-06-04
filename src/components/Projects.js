import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText,CardMenu, CardTitle,Button,CardActions } from 'react-mdl';
import DermaBox from './img/dermabox.PNG';
import BlockContract from './img/blockContract.PNG';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    render(){
        return(
           
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                     <Tab><strong>Projects</strong></Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="projects-grid content">
                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto', minheight: '400px'}}>
                            <CardTitle style={{color: 'white', textShadow: 'black 1px 0 10px', height: '200px', background: `url(${BlockContract}) center / cover`}}>BlockContract</CardTitle>
                            <CardText>
                            BlockContracts is an application in which you create and sign contracts. When you sign a contract with BlockContracts, 
                            you back your signature with a piece of personal information only accessible to you and the government. Your information-backed 
                            signature is encrypted, then encrypted again along with the contract, and is added to BlockContracts' blockchain network.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/Derek-Y-Wang/BlockContracts">GitHub</a></Button>
                                <Button colored><a href="https://devpost.com/software/blockcontracts">DevPost</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                               
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto', minheight: '400px'}}>
                            <CardTitle style={{color: 'white', textShadow: 'black 1px 0 10px', height: '200px', background: `url(${DermaBox}) center / cover`, }}>DermaBox</CardTitle>
                            <CardText>
                            Dermabox is an skin scanner which uses OpenCV to scan and process the image of a child's skin. It uses machine learning to determine 
                            whether the child has atopic eczema - a skin disease that can be sometimes easily missed. Dermabox shows the results of the illness tests 
                            on an LCD. The results are sent to a database, where a doctor can take a look at them. 
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/Derek-Y-Wang/Dermabox">GitHub</a></Button>
                                <Button colored><a href="https://devpost.com/software/dermabox">DevPost</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                
                            </CardMenu>
                        </Card>


                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto', minheight: '400px'}}>
                            <CardTitle style={{color: 'white',  textShadow: 'black 1px 0 10px', height: '200px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>In Progress</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                
                            </CardMenu>
                        </Card>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;