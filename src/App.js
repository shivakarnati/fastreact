import { useState } from "react";
import "./styles.css";
import React from 'react';
import img1 from "./assets/plot.png";
import img2 from "./assets/plot_Extended.png";
import img3 from "./assets/plot_modelVariation1.png";
import photo from "./assets/profile_photo.jpg"


// Constants
const skills = ['Digital Skills', 'Skills']
const interest = ['Hobbies', 'Interests']

const content=[
  [
    "Worked on Learning Vector Quantization",
    "Worked on Support Vector Machine",
    "Worked on Tree based models",
    "Goal is to find out interpretability and explainability of the models."
  ],
  [
    "Worked on Yolo models for 2D Object Detection",
    "Worked on Detectron2 and Mediapipe for Object Detection",
    "Tried Segment Anything Model for Image Segmentation",
    "Goal is Visual SLAM (Absolute and Relative)"
  ],
  [
    "Built LSTM, GRU, and Transformers for sequential data",
    "Developed RAG on custom dataset",
    "Developed Knowledge Graphs on custom dataset"
  ]
];


const SimulationResults = () => {
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false 
  });
  const onClickHandler = (order) => {
    setImageClicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
  };
  return (
    <div>
      <div className="Ccontainer">
        <button onClick={() => onClickHandler("ground")} className="ground">
          SEIR
        </button>
        <button onClick={() => onClickHandler("first")} className="ground">
          SEIRE
        </button>
        <button onClick={() => onClickHandler("second")} className="ground">
          Extended Model
        </button>
      </div>
      <div className="image">
        {imageClicked.ground && <img src={img1} alt="ground" />}
        {imageClicked.first && <img src={img2} alt="first" />}
        {imageClicked.second && <img src={img3} alt="second" />}
      </div>
    </div>
  );
};


// functions

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}


function CoreConcepts(props){
  return <li>
    <img src={props.image} alt={props.title} width={100} height={100}></img>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
}

function Header(){
  return (
  <div>
      <img src={photo} alt="" width={250} height={333}/>
      <li>
        <a href="https://www.linkedin.com/in/shivakrishna
-karnati-2b429827b">Contact Me</a>
    </li>
    <li>
        <a href="https://github.com/shivakarnati">GitHub</a>
    </li>
        <div>
          <h1>Shivakrishna Karnati</h1>
          <p>Machine Learning, Computer Vision, and Natural Language Processing  Enthusiast.</p>
        </div>
  </div>
  );
}

// default function
export default function App(){
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return(
    <div>
      <Header />
      <div>
      <div id="tabs">
        <menu>
          <button className= {activeContentIndex === 0 ? "active" : ""}
          onClick={() => setActiveContentIndex(0)}>
            Machine Learning
          </button>
          <button className={activeContentIndex === 1 ? "active" : ""}
          onClick={()=> setActiveContentIndex(1)}>
            Computer Vision
          </button>
          <button className={activeContentIndex === 2 ? "active" : ""}
          onClick={()=> setActiveContentIndex(2)}>
            Natural Language Processing
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item)=> (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            title = "Components"
            description = "This is a test of props"
            image = {img1}
            />
          </ul>
        </section>
        </main>
      <div>
      <div id="projects">
      <div>
        <h3>ACADEMIC PROJECTS</h3>
        <ul>
            <li>Crop Management System</li>
            <li>Analysis of Automated Text Messaging impact on FitBit data</li>
            <button >Show Results and Files</button>
            <li>SEIR model for COVID-19 dynamics incorporating the environment and social distancing</li>
            <div>
              <SimulationResults />
        </div>
          </ul>
      </div>
      <div>
        <h3>HOBBY PROJECTS</h3>
          <ul>
            <li>NewYork Taxi Fare Prediction</li>
            <li>Twitter Sentiment Analysis</li>
            <li>Student Hostel Management System</li>
            <li>Drone Face Following</li>
            <li>Jet Racer Obstacle Avoidance</li>
          </ul>
      </div>
    </div>
    </div>
    <div id="education">
      <div>
        <h3>Educational Background</h3>
        <ul>
          <li>Applied Mathematics for Networks and Data Sciences (M.Sc) - Hochschule Mittweida, Mittweida, Germany</li>
          <li>Masters of Computer Application (M.C.A) - Osmania University, Hyderabad, India</li>
          <li>Bachelor in Computer Science (B.Sc) -  Osmania University, Hyderabad, India</li>
        </ul>
      </div>
    </div>
    <div id="skills">
      <h3>{skills[genRandomInt(1)]}</h3>
        <p>Java, Python, React, Sql, R, Tensorflow, PyTorch, Spring Boot, R, FastAPI, Git, AWS, Azure AI, Docker, OpenCV, Pandas, Numpy</p>
    </div>
    <div id="hobbies">
      <h3>{interest[genRandomInt(1)]}</h3>
        <ul>
          <li>Playing Basketball</li>
          <li>Listening to Music</li>
          <li>Watching Movies</li>
          <li>Writing Stories</li>
        </ul>
    </div>
    </div>
  )
}
