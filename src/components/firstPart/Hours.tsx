import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./../../css/firstPart.css";


const Hours = () => {
  const [hours, hoursUpdate] = useState(new Date().toLocaleTimeString());

 
  
  return(
  <div>

    <div className="heure thrn fw-bold noSelect">Paris - {hours}</div>
  </div>
  
  
  );
};

export default Hours;
