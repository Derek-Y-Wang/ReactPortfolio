import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import HeadShot from './img/placeHolder.png';


class About extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img shadow={5} src={HeadShot}
                        alt="avatar"
                        className="avatar-img"/>
                        <div className="about-text">
                            <h1>Hi, I'm Derek Wang, a student at the University of Toronto.
                                There I study Computer Science and Statistical Sciences.
                                I am interested in ... Most important of all I love to learn.
                            </h1>                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;