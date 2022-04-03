import React from 'react';
import { Fade } from 'react-reveal';

function AboutMe() {
    return(
        <div className="about">
        <Fade anchor="bottom">
            <h2> Hi, I'm Jonathan. Nice to meet you. </h2>
            <p> 
                I am a software engineer with high interest in <b>Software Engineering</b>, <b>Web Development</b>, <b>Artificial Intelligence</b> and <b>Cloud Engineering</b>.
            </p>
            
            <br/>
            <p>
                I was born in the Philippines, and I have been living in Dublin, Ireland more than half of my life now. I have achieved my Bachelor's degree
                in <b>Computer Science International</b> at Technological University Dublin. During my third year Erasmus programme in Darmstadt, Germany,
                I have also attained another Bachelor's degree in <b>Computer Science</b> at Darmstadt University of Applied Sciences.
            </p>     
            
            <br/>

            <p> 
                Throughout the two degrees, I have developed several applications with various technologies that are on demand, 
                and gained experience working under the Scrum Agile methodology.
                The key projects are highlighted below in the <b>portfolio</b>. Check them out!
            </p> 
            <br/>          
        </Fade>
        </div>
    );
}

export default AboutMe;