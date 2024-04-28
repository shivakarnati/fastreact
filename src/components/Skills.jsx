// Constants
const skills = ['Digital Skills', 'Skills']

// Random Value Generator Method
function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}


export default function Skills(){
    return (
    <div id="skills">
    <h3>{skills[genRandomInt(1)]}</h3>
    <p>Java, Python, React, Sql, R, Tensorflow, PyTorch, Spring Boot, R, FastAPI, Git, AWS, Azure AI, Docker, OpenCV, Pandas, Numpy</p>
</div>
)
}