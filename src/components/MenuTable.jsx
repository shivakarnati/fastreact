import { useState } from "react";


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


export default function MenuTable(){
const [activeContentIndex, setActiveContentIndex] = useState(0);
return (
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
)
}
