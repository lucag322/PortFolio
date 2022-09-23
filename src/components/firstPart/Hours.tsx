import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Hours = () => {
  const [hours, hoursUpdate] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    hoursUpdate(new Date().toLocaleTimeString());
  }, 1000);
  const changContentContact = () =>{
    document.querySelector("#Contact")!.innerHTML ='Contact';
     };
   
   const resetContentContact = () =>{
    document.querySelector("#Contact")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
   }
 
   const changContentAbout = () =>{
     document.querySelector("#About")!.innerHTML ='About';
      };
    
    const resetContentAbout = () =>{
     document.querySelector("#About")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
    }
 
    const changContentProject = () =>{
     document.querySelector("#Project")!.innerHTML ='Project';
      };
    
    const resetContentProject = () =>{
     document.querySelector("#Project")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
    }
 
    const changContentTop = () =>{
     document.querySelector("#Top")!.innerHTML ='Top';
      };
    
    const resetContentTop = () =>{
     document.querySelector("#Top")!.innerHTML = ' <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle dote" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg> ';
    }
 
  
  return(
  <div>
    <nav className="noSelect navbarCustom">
      <ul className="navbarContent thrn fw-bold ">
      <li className="py-2"><div className="bigTiret"/></li>
      
        <li onMouseOut={resetContentContact} onMouseOver={changContentContact} id="Contact" className="Navitemrota">
          <FontAwesomeIcon icon={ faCircle } className="dote"/>
        </li>
        <li className="py-2"><div className="tiret"/></li>
        <li onMouseOut={resetContentAbout} onMouseOver={changContentAbout} id="About" className="Navitemrota">
          <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
        <li className="py-2"><div className="tiret"/></li>
        <li onMouseOut={resetContentProject} onMouseOver={changContentProject} id="Project" className="Navitemrota">
          <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
        <li className="py-2"><div className="tiret"/></li>
        <li onMouseOut={resetContentTop} onMouseOver={changContentTop} id="Top" className="Navitemrota">
          <FontAwesomeIcon icon={ faCircle }className="dote" /> </li>
      <li className="py-2"><div className="bigTiret"/></li>
      </ul>
    </nav>

    <div className="heure thrn fw-bold noSelect">Paris - {hours}</div>
  </div>
  
  
  );
};

export default Hours;
