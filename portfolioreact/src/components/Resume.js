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
                        <p style={{width:'50%'}}>Hi I'm Derek. I enjoy exploring new technologies, 
                            learning new things and seek to improve myself on a 
                            daily basis.
                        </p>
                        <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                        <h5>Phone:</h5>
                        <p>(416)-825-6591</p>
                        <h5>Email:</h5>
                        <p>wang.y.derek@gmail.com</p>
                        <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                    
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2018}
                            endYear="Present"
                            schoolName="University of Toronto"
                            schoolDescription="Candidate for Bachelor of Science (Computer Science))"

                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                        startYear="May 18, 2020"
                        endYear="May 20, 2020"
                        jobName="RU Hacks, Ryerson University"
                        point1="Created a GUI based application with tkinter allowing users to create secure and encrypted contracts"
                        point2="Used pyca/cryptography and Tensorflow to analyze and encrypt user data to be stored in a blockchain for secure information storage. "

                        />

                        <Experience
                        startYear="March 7, 2020"
                        endYear="March 8, 2020"
                        jobName="NewHacks,  University of Toronto"
                        point2="Used HTML and CSS to create a website that offers a login page in conjunction with a PHP database to store users’ personal information"
                        point1="Developed a custom web application to detect skin diseases of patients by using Tensorflow"
                        />

                        <Experience
                        startYear="February 14, 2020 "
                        endYear="February 16, 2020 "
                        jobName="Hack the Valley IV, University of Toronto"
                        point1="Used Tensorflow, OpenCV and RaspberryPi in Python to create three machine learning models in order to detect Corneal Ulcers, Heart Disease and Sickle Cell Disease"
                        point2="Incorporated 3D printed casing with Raspberry Pi and camera module, which is used to capture images that can be processed with machine learning models."
                        />      

                        <Experience
                        startYear="January 17, 2020"
                        endYear="January 19, 2020"
                        jobName="UofT Hacks, University of Toronto"
                        point2="Developed an android application called “E-Halo” using Android Studio and Adobe Illustrator in order to help modern day teenagers quit vaping"
                        point1="Incorporated Google Firebase to provide users with a real time database that can store personal user data"
                        />

                        <Experience
                        startYear="June, 2016"
                        endYear="August, 2019"
                        jobName="Kumon Tutor"
                        point1="Graded English and math homework of students on a weekly basis"
                        point2="Extensive training tutoring children, pre-kindergarten to high school, in mathematics and English"
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