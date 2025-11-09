import React, { useState } from "react";
import profilePicBrian from "../../images/BrianResized.png";
import Popup from "../Popup.jsx";

function CardBrian() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Brian">
      <span className="poppins-regular">
        <img src={profilePicBrian} alt="Brian Moore"></img>
        <h2>Brian Moore</h2>
        <p>Board Member</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicBrian} alt="Profile Picture"></img>
          <p>
            Brian Moore received a Bachelor of Science degree in Business
            Management (Finance) from Brigham Young University, after which he
            obtained a Juris Doctor degree from Willamette University College of
            Law (Salem, Oregon).
          </p>
          <p>
            After practicing real estate and land use law with the law firm of
            Saalfeld Griggs PC in Salem, Oregon, Brian joined one of his
            clients, Mountain West Investment Corp., managing real estate
            development projects.
          </p>
          <p>
            In 2019, Brian helped found and is now the owner and CEO of the
            Neighborly Ventures, Inc. family of companies, which focuses on
            developing, constructing, and managing multi-family housing.
            Neighborly Ventures has developed over 3,300 multi-family units in
            three states (OR, WA, UT) valuing over $800MM, currently manages 18
            multi-family properties (3,364 units) in those same states, and is
            currently constructing a 186-unit multi-family project in Bend,
            Oregon.
          </p>
          <p>
            Brian and his wife, Hailey (BS, Family Science '99), have six
            children and live in Salem, Oregon.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardBrian;
