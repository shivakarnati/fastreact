import photo from "../../assets/profile_photo.jpg"
import '../Header/Header.css';

/* Components */
export default function Header(){
    return ( 
    <header>
        <img src={photo} alt=""/>
        <a href="https://www.linkedin.com/in/shivakrishna-karnati-2b429827b" className="list">Contact</a>
        <a href="https://github.com/shivakarnati" className="list">GitHub</a>
        <div>
        <h1>Shivakrishna Karnati</h1>
        <p>Machine Learning, Computer Vision, and Natural Language Processing  Enthusiast.</p>
        </div>
        <h3 className="warning">Attention! The site is under construction!!!!!</h3>
    </header>
);
}