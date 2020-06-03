import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import HeadShot from './img/placeHolder.png';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img shadow={5} src={HeadShot}
                        alt="avatar"
                        className="avatar-img"/>
                        <div className="banner-text">
                            <h1>DEVELOPER</h1>
                        <hr />
                        <p>Python | Java | HTML/CSS | React | STUFF</p>
                        <div className="social-links">
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/derek-wang-3bb54a19b/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden='true' />
                            </a>
                             {/* GitHub */}
                             <a href="https://github.com/Derek-Y-Wang" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden='true'></i>
                            </a>
                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;