import React from "react";
import { items } from "./menuItems";
import "./../../css/firstPart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll, Element as scroll, scrollSpy, scroller } from 'react-scroll'


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
          <Link activeClass="active" className=" noSelect" to={item.itemLink} spy={true} smooth={true} duration={500} offset={0} onClick={() => onChange(false)}>
          
            {item.itemText}
        </Link>
          
        ))}
      </div>
    </div>
  );
}

export default Menu;