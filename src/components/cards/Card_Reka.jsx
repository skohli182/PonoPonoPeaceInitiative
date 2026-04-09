import React, { useState } from "react";
import profilePicReka from "../../images/RekaResized.png";
import Popup from "../Popup.jsx";

function CardReka() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Reka">
      <span className="poppins-regular">
        <img src={profilePicReka} alt="Réka Bordás-Simon"></img>
        <h2>Réka Bordás-Simon</h2>
        <p>Vice-President</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicReka} alt="Profile Picture"></img>
          <p>
            Réka, is originally from Hungary, though has lived all
            over Europe before moving to Hawaii in 2014.
          </p>
          <p>
            Obtaining her double bachelors in Peacebuilding & Psychology, she graduated
            from BYUH in 2018.
          </p>
          <p>
            A mother of 4 children, Réka has recently finished a criminal justice
            certificate at UH and is transferring to grad school in a few
            weeks to get her MA in Conflict Transformation at the Peace & Justice
            Center at EMU.
          </p>
          <p>
            Réka was a field director for the McKay Center and was also involved in
            volunteering with the center while she was a student, with her main focus
            was mediation. She had a chance in 2015 to go to a field trip to
            Barcelona for the Summit of Nobel Peace Laureates and always
            wished more of her peers had this opportunity because it truly
            enhanced her educational experience.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardReka;
