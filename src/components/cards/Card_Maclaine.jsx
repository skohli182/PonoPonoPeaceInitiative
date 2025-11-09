import React, { useState } from "react";
import profilePicMaclaine from "../../images/MaclaineResized.png";
import Popup from "../Popup.jsx";

function CardMaclaine() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Maclaine">
      <span className="poppins-regular">
        <img src={profilePicMaclaine} alt="Maclaine Day"></img>
        <h2>Maclaine Day</h2>
        <p>Secretary</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicMaclaine} alt="Profile Picture"></img>
          <p>
            Maclaine grew up in rural Central Montana. In 2017, she graduated
            from Brigham Young University Hawaii with a Bachelor of Arts Degree
            in International Cultural Studies with a certificate in
            Peacebuilding and Mediation and a certificate in Strategic
            Communication.
          </p>
          <p>
            She then served a volunteer mission for The Church of Jesus Christ
            of Latter-day Saints in Ukraine for a year and a half. Maclaine
            graduated from the University of Bradford with her master's degree
            in Advanced Practice in Peacebuilding and Conflict Resolution in
            December of 2021.
          </p>
          <p>
            She has worked as a youth fitness coach, residential assistant,
            mediator, legal assistant, substitute teacher, and music instructor.
          </p>
          <p>
            Maclaine began teaching in the Intercultural Peacebuilding
            department at Brigham Young University Hawaii in January of 2022.
          </p>
          <p>
            Maclaine is passionate about peacebuilding. She has done
            peacebuilding work in Ukraine, England, Thailand, New Zealand,
            Hawaii, Utah, and Montana.
          </p>
          <p>
            She loves the creative opportunities that working to constructively
            overcome conflict can bring.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardMaclaine;
