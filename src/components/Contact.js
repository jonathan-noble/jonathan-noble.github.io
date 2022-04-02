import React from 'react';
import Swing from 'react-reveal/Swing';

function Contact() {

  return (
    <footer className="footer">
      <div className="contact"> 

      <Swing>
        <span> <i className="material-icons">local_phone</i>
          <p>+353 (0) 86 247 3779</p>
        </span>

        <span><i className="material-icons">email</i>
          <p>jonathan.noble95@gmail.com</p>
        </span>

        <span><i className="material-icons">location_city</i>
          <p>Dublin, Ireland</p>
        </span>
        </Swing>
      </div>

      <br/><br/>
      <hr/>

      <p>Copyright © Jonathan Noble 2022</p>

    </footer>
  );
}

export default Contact;