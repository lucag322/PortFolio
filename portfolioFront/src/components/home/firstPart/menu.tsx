import React from "react";
import { items } from "./menuItems";
import "../../../css/firstPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Menu({ isOpen, onChange }: { isOpen: boolean; onChange: any }) {
  function scrollBack() {
    var Html = document.querySelector(".html");
    if (Html != null) {
      Html.classList.remove("noscroll");
    }
    onChange(false);
  }

  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span className=" btnClose" onClick={scrollBack}>
        <FontAwesomeIcon icon={faXmark} className="dote" />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <Link to={item.itemLink} key={index} onClick={scrollBack}>
            {item.itemText}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
