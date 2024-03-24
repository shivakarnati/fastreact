import { useState } from "react";
import "./styles.css";
import React from 'react';
import img1 from "./assets/plot.png";
import img2 from "./assets/plot_Extended.png";
import img3 from "./assets/plot_modelVariation1.png";
import photo from "./assets/Photo-1.jpeg"


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


export default function App(){
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return(
    <div>
      <header>
        <img src={photo} alt=""/>
        <a href="https://www.linkedin.com/in/shivakrishna
-karnati-2b429827b">Contact Me</a>
        <a href="https://github.com/shivakarnati">GitHub</a>
        <div>
          <h1>Shivakrishna Karnati</h1>
          <p>Machine Learning, Computer Vision, and Natural Language Processing  Enthusiast.</p>
        </div>
      </header>
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
  )
}
