import React, {useState} from 'react';
import { Fade } from 'react-reveal';
import YouTube from 'react-youtube';
import { Button, Modal, Card, Row, Col } from 'react-bootstrap';

function Project({props}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return (
        <Fade anchor="bottom">
            <div className="project">
                <Card className="project-card" style={{ width: '22.5rem' }}  bg="light" onClick={handleShow}>
                    <Card.Img className="project-card-img" variant="top" src={props.preview} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                         <p>{props.desc}</p>
                         <p><strong><em>Tools:</em> {props.tools}</strong></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
    
                <Modal 
                size="lg"
                show={show} 
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={15} md={8}>
                            <Fade duration={1500}> 
                            {   props.videoId != null ?                            
                                <YouTube 
                                videoId={props.videoId}
                                opts={opts}
                                />
                                : <img src={props.preview} alt="gif-preview" className="gif-preview" />
                            }
                            </Fade>
                            </Col>
                            <Col xs={6} md={4} className="project-content">
                             <h2>Features</h2>
                             <hr/>
                             <ul>
                                {props.features.map((feature, i) => {
                                    return <li key={i}>{feature}</li>
                                })}
                             </ul>
                            <Button
                                variant="dark"
                                size="lg"
                                href={props.repo} 
                                className="repo-btn"
                                target="_blank" 
                                rel="noopener noreferrer">View Source
                            </Button>
                            </Col>
                        </Row>
                    </Modal.Body>                
                </Modal>
            </div>   
        </Fade>
    );
}

export default Project;