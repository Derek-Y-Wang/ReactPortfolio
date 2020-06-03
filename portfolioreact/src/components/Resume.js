import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        
                        <h2>Derek Wang</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                        <p>Hi I'm Derek</p>
                        <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way</p>
                        <h5>Phone</h5>
                        <p>Phone Number</p>
                        <h5>Email</h5>
                        <p>wang.y.derek@gmail.com</p>
                        <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                    
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2018}
                            endYear="Present"
                            schoolName="University of Toronto"
                            schoolDescription="BSc(Computer Science)"

                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                        startYear={2020}
                        endYear={2020}
                        jobName="Placement"
                        jobDescription="STUFF DONE AT JOB"
                        />

                        <Experience
                        startYear={2020}
                        endYear={2020}
                        jobName="Placement"
                        jobDescription="STUFF DONE AT JOB"
                        />


                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>
                    <Skills />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;