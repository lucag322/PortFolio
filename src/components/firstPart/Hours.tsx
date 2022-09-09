import { useState, useEffect } from "react";

const Hours = () => {
  const [hours, hoursUpdate] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    hoursUpdate(new Date().toLocaleTimeString());
  }, 1000);

  return <div className="heure thrn fw-bold noSelect">Paris - {hours}</div>;
};

export default Hours;
