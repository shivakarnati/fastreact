import img1 from "../assets/plot.png";
import img2 from "../assets/plot_Extended.png";
import img3 from "../assets/plot_modelVariation1.png";
import { useState } from "react";


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



export default function Projects(props){
    return (
    <div id="projects">
    <h3>{props.heading}</h3>
    <ul>
    <li>{props.list1}</li>
    <li>{props.list2}</li>
    <li>{props.list3}</li>
    <div>
        <SimulationResults />
    </div>
    </ul>
</div>
)
}