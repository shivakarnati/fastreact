import "./css/styles.css";
import React from 'react';
import Education from "./components/Education.jsx";
import Header from "./components/Header/Header.jsx";
import Hobbies from "./components/Hobbies.jsx";
import HobbyProjects  from './components/HobbyProjects.jsx';
import MenuTable from "./components/MenuTable.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { Education_prop, HobbyProjects_prop, Projects_prop, Hobbies_prop } from "./constants/data.js";


/* Default */
export default function App(){

  return(
    <>
      <Header />
      <main>
        <section >
        <MenuTable />
        </section>
      </main>
      < Education
      {...Education_prop[0]}/>
      <Projects 
    {...Projects_prop[0]}
      />
      <HobbyProjects 
      {...HobbyProjects_prop[0]}
      />
      <Skills />
      <Hobbies 
      {...Hobbies_prop[0]}/>
      </>
  )
}
