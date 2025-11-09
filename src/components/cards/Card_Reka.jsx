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
            My name is Réka, I am originally from Hungary though I lived all
            over Europe before moving to Hawaii in 2014.
          </p>
          <p>
            I got my double bachelors in Peacebuilding & Psychology, I graduated
            from BYUH in 2018.
          </p>
          <p>
            I am a mother of 4 children. I just finished a criminal justice
            certificate at UH and I am transferring to grad school in a few
            weeks to get my MA in Conflict Transformation at the Peace & Justice
            Center at EMU.
          </p>
          <p>
            I was a field director for the McKay Center and was also involved in
            volunteering with the center while I was a student. My main focus
            was mediation. I had a chance in 2015 to go to a field trip to
            Barcelona for the Summit of Nobel Peace Laureates and I always
            wished more of my peers had this opportunity because it truly
            enhanced my educational experience.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardReka;
