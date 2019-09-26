import React from 'react';
import profile from '../media/profile.jpg';
import { Fade } from 'react-reveal';

function Landing() {

    return(
    <div className="landing" id="landing">
        <div className="landing-grid">
            <Fade anchor="bottom">
                <img 
                    className="profile-img" 
                    src={profile} 
                    alt="profie pic"
                />
                <div className="banner-text">
                    <h1>SOFTWARE DEVELOPER</h1>

                    <hr/>
                    <p>Python | JavaScript ES6 | Java | React | NodeJS | HTML5/CSS3 | SQL | C#</p>
                    
                    <div className="social-links">

                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/jon-noble/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        {/* GitHub*/}
                        <a href="https://github.com/jonathan-noble" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>                                               
                    </div>
                </div>
            </Fade> 
        </div>
    </div>
    );
}

export default Landing;