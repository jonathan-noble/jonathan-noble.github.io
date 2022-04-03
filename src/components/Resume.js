import React from 'react';
import { Button } from 'react-bootstrap';
import Jump from 'react-reveal/Jump';
import myResume from "../media/JonathanNoble-Resume.pdf";

function Resume() {
  return (
    <div className="resume" > 
      <h1>RESUME</h1>
      <hr/>     
      <Jump anchor="bottom">
        <Button 
          className="resume-btn" 
          size="lg"
          variant="warning" 
          href={myResume} 
          target="_blank" 
          rel="noopener noreferrer">
          Resume - PDF
        </Button>
      </Jump>

      </div>
  );
}

export default Resume;