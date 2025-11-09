import React from "react";
import "./About.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <span className="poppins-regular">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          {props.children}
        </div>
      </span>
    </div>
  ) : (
    ""
  );
}

export default Popup;
