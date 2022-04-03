import React from 'react';
import Project from "./Project";
import { CardGroup } from 'react-bootstrap';
import proj01 from '../media/proj01.PNG';
import proj02 from '../media/proj02.png';
import proj03 from '../media/proj03.PNG';
import proj04 from '../media/proj04.jpg';
import proj05 from '../media/proj05.PNG';
import proj06 from '../media/proj06.jpg';
// import sample from '../media/sample.gif';


const projects = [
  {
    title: 'SpotiFace',
    repo: 'https://github.com/jonathan-noble/SpotiFace',
    videoId: "j_FS7d0ntEw",
    desc:
      'A web app that recommends a playlist corresponding to the captured user\'s face with the aid of a Machine Learning model.',
    tools: 'Flask, React, NodeJS, Tensorflow, OpenCV, Spotify API',
    features: [
      'Real-time Face Detection',
      'Facial Recognition Expression Model',
      'Instant Prediction of Mood',
      '3rd-party API Authentication & Integration',
      'Recommendation based on Track attributes',
      'Spotify Web Player',
    ],
    preview: proj01
  },
  {
    title: 'Unity VR World',
    repo: 'https://github.com/jonathan-noble/3rdYr_VR_WORLD',
    videoId: "_XfzyrmcO_c",
    desc:
      'A survival Virtual Reality game where the player must complete the objectives within a span of resources.',
    tools: ' C#, Unity, GoogleVR, Blender, Resharper',
    features: [
      'VR Compatibility on Android',
      'First Person Control',
      'Agile Management',
      'Procedural Terrains',
      'Unit Testing',
      'C# Concepts',
    ],
    preview: proj02
  },
  {
    title: 'Ulam',
    repo: 'https://github.com/jonathan-noble/ulam',
    // videoId: "",
    desc:
      'A web app that lets users log in with their registered account and create a cookbook of their favourite recipes.',
      tools: 'React, Redux, Firebase Tools, Materialize',
    features: [
      'React Routing',
      'Redux State Management',
      'Firebase Authentication',
      'Firebase Database',
      'Firebase Hosting',
      'Firebase Functions',
      'Responsive Layout',
    ],
    preview: proj03
  },
  {
    title: 'OralBearduino',
    repo: 'https://github.com/jonathan-noble/2ndYr_Assignment3_OralBearduino',
    videoId: "L_IXU5uO1O4",
    desc:
      'A notification system to encourage children to brush their teeth in a fun, Internet of Things environment.',
    tools: 'Android, Arduino, TFT LCD Screen, Wemos-D1 Mini',
    features: [
      'Vibration Switch Sensor',
      'E-mail Sender via WiFi Module',
      'Notification access via App',
      'Visual Aid within LCD Screen',
      'Clean UI',
      'Base64 Encoded',
    ],
    preview: proj04
  },
  {
    title: 'ML Classifier',
    repo: 'https://github.com/jonathan-noble/4thYr_MachineLearning_Classifier',
    desc:
      'A machine-learning classifier built for predicting the outcome of a Bank marketing campaign.',
    tools: 'Python, Anaconda, Jupyter Notebook, SkLearn',
    features: [
      'Data Understanding',
      'Data Preparation',
      'Visual Representation',
      'Modelling',
      'Testing & Evaluation',
      'Intensive Research on ML'
    ],
    preview: proj05,
    // gifPreview: sample
  },
  {
    title: '.NET Reminder',
    repo: 'https://github.com/jonathan-noble/3rdYr_.NET_Reminder',
    desc:
      'A GUI framework designed to remind users of their daily necessities and to-do lists through labelled "sticky" notes.',
    tools: 'C#, .NET, WPF, VisualStudio 2017, Azure, Git',
    features: [
      'CRUD operations',
      'Serialization/Deserialization',
      'Saving the State',
      'Unit Testing',
      'Model View Controller Pattern',
    ],
    preview: proj06,
    // gifPreview: proj06
  },
]


const Projects = props => {
    return(
        <div className="projects">
            <h1>PORTFOLIO</h1>
                <hr/>     
            <CardGroup className="projects-grid">           
                {projects.map((project, i) => {
                  return <Project key={i} props={project}/>
                })}         
            </CardGroup>
    </div>
    );
}

export default Projects;