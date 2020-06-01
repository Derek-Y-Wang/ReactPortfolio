import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://www.riinvest.net/wp-content/uploads/2018/02/MaleAvatar-1.png'
                        alt="avatar"
                        className="avatar-img"/>
                        <div className="banner-text">
                            <h1>SOME DEVELOPER</h1>
                        <hr />
                        <p>STUFF | STUFF | STUFF | STUFF | STUFF</p>

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