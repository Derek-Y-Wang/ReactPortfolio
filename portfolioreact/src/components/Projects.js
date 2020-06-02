import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText,CardMenu, CardTitle,IconButton,Button,CardActions } from 'react-mdl';


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
                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '200px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://www.google.com/">GitHub</a></Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '200px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>


                        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '200px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
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