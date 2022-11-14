import React from "react";
import { items } from "./menuItems";
import "./../../css/firstPart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function Menu({ isOpen, onChange }: { isOpen: boolean; onChange: any }) {
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className=" btnClose"
        onClick={() => onChange(false)}
      >
        <FontAwesomeIcon icon={ faXmark }className="dote" />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;