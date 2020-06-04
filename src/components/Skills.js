import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
        <Grid>
            <Cell col={12}>
                <div style={{display: 'flex'}}>
                    <ul>
                        <li>Proficient in Python, Java, C, HTML/CSS</li>
                        <li>Experience working with Android Studio, 
                            Tensorflow, Sci-kit Learn, and Unix Systems</li>
                        <li>Well versed in algorithm design and complexity analysis 
                            as well as object-oriented design and design patterns</li>
                        <li>Experienced in development concepts such as version control,
                             unit testing and Git</li>
                    </ul>
                </div>
            </Cell>
            
        </Grid>
        )
    }
}

export default Skills;