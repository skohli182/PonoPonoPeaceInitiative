import React, { useState } from "react";
import profilePicSteve from "../../images/SteveResized.png";
import Popup from "../Popup.jsx";

function CardSteve() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card_Steve">
      <span className="poppins-regular">
        <img src={profilePicSteve} alt="Steve Pedersen"></img>
        <h2>Steve Pedersen</h2>
        <p>Treasurer</p>
        <button onClick={() => setButtonPopup(true)}>View Details</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img src={profilePicSteve} alt="Profile Picture"></img>
          <p>
            Steve Pedersen has dedicated his career to making a positive impact
            on communities and addressing the root causes of challenges related
            to poverty, health disparities, and social inequity. Armed with a
            Masters of Public Health degree from Yale University, Steve has
            leveraged his expertise to drive meaningful change. Steve has had
            the privilege of working with First Nations communities and
            stakeholders in Canada, striving to address the enduring impacts of
            colonialism. He has helped secure grant funding, taught workshops,
            and collaborated on the development of chronic disease and food
            security strategies.
          </p>
          <p>
            Steve's entrepreneurial spirit has also led him to cofound a
            micro-credit NGO and an internet start-up that was subsequently
            acquired by a venture capital firm.
          </p>
          <p>
            He has shared his expertise in public health as a university
            lecturer for five years and as an invited guest lecturer. As the
            executive director of an NGO, Steve has navigated the complexities
            of the non-profit sector, working to amplify the voices of the
            public health sector.
          </p>
          <p>
            Steve has also served as the Director of a primary health care
            delivery organization working to strengthen the primary health care
            system by reducing gaps in care and supporting medical clinics in
            their efforts to become more patient-centered and to utilize
            team-based care. Alongside his diverse professional endeavors, Steve
            has maintained a deep commitment to fostering peace, trust, and
            interfaith understanding.
          </p>
          <p>
            In 2023, he co-founded the Pono Pono Peace Initiative, a
            groundbreaking organization dedicated to promoting holistic,
            community-driven approaches to conflict resolution and social
            transformation.
          </p>
          <p>
            Throughout his career, Steve has remained steadfast in his
            commitment to addressing the underlying issues of disease and
            poverty. He has honed his skills in creative leadership and design
            thinking and has even written an academic paper exploring the power
            of hope. Furthermore, Steve has created and taught numerous
            in-person and online courses focused on leadership, teambuilding,
            trust, happiness, marriage, and interfaith understanding.
          </p>
        </Popup>
      </span>
    </div>
  );
}

export default CardSteve;
