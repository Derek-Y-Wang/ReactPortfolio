import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';



class Contacts extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Derek Wang</h2>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/$12/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width:"75%", margin:"auto", paddingTop: "1em"}}> Random Text</p>
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List style={{width: '300px'}}>
                        <ListItem >
                            <ListItemContent style={{fontSize: '25px', fontFamily: "Anton"}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (451) 456 456
                            </ListItemContent>
                        </ListItem>
                        <ListItem >
                            <ListItemContent style={{fontSize: '25px', fontFamily: "Anton", position: "fixed"}}>
                                <i className="fa fa-envelope" aria-hidden="true"/> 
                                wang.y.derek@gmail.com
                            </ListItemContent>
                        </ListItem>
                       
                        </List> 
                        </div>                       
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contacts;